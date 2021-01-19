import React, {useState, useRef} from 'react';
import ApiManager from '../../../utilities/ApiManager';
import Toast from '../../../utilities/Toast';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import Search from '../../../styledComponents/Search';
import Icon from '../Left/Icon';
import { GET_CURRENT_WEATHER, GET_WEEK_WEATHER, GET_HOURS_WEATHER } from '../../../actions/index';
import { removeSpecialChars } from '../functions/removeSpecialChars';

const t1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });

const SearchForm = () => {
    /* Start Search animation */
    const [isLoupeOpen, setIsLoupeOpen] = useState(false);
    const wrapper = useRef(null);
    const showLoupe = () => {
        const [elements] = wrapper.current.children;

        const searchForm = elements.getElementsByClassName("search");
        const loupe = elements.getElementsByClassName("loupe");

        gsap.set(searchForm, { transformOrigin: "0% 100%" });

        if(t1.isActive()) return

        if(!isLoupeOpen){
            t1.fromTo(searchForm, { scaleX: 0 }, { duration: 1, autoAlpha: 1, scaleX: 1 });
            t1.fromTo(loupe, {x: '-=0'}, {duration: 1, x: '+=265', },'-=1')
            
            setIsLoupeOpen(!isLoupeOpen)
        }
        else{
            t1.fromTo(loupe, {x: '+=0'}, {x: '-=265', duration: 1},)
            t1.fromTo(searchForm, { scaleX: 1 }, {duration: 1, autoAlpha: 0, scaleX: 0 }, '-=1');
            setIsLoupeOpen(!isLoupeOpen)
        }
}
/* End Search animation */
/* Start Form functionality */
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies();
    const optionTime = useSelector(({appStatesReducer}) => appStatesReducer.optionTime);
    
    const onSubmit = async ({city}, e) => {
        const response = await ApiManager.call('weather',{
                city: removeSpecialChars(city),
                weather: 'current'
        })
        const {data} = await response.json();
        console.log(data)
        if(response.status === 404){
            Toast.toastMessage(`City ${city} has not been found`, 'warn')
        }
        else if(response.status === 200){
            let rain = 0;
            if(data.rain !== undefined){
                rain = data.rain["1h"]
            }
            dispatch(GET_CURRENT_WEATHER({
                city: city,
                temp: Math.round(data.temp * 10) / 10,
                rain: rain,
                feels_like: Math.round(data.feels_like * 10) / 10,
                wind: Math.round(data.wind_speed * 10) / 10,
                humidity: data.humidity,
                pressure: data.pressure,
                main: data.weather[0].main
            }))
            setCookie('currentCity', city, { path: '/' });
            if(optionTime){
                const response = await ApiManager.call('weather',{
                    city: removeSpecialChars(city),
                    weather:optionTime
                })
                const {data} = await response.json();
                if(optionTime === 'daily'){
                    dispatch(GET_WEEK_WEATHER(data))
                }
                else{
                    dispatch(GET_HOURS_WEATHER(data));
                }
            }
        }
        else{
            Toast.toastMessage('', 'error')
        }
        e.target.reset();
    }
    {/* End Form Funcionality */}
    return (
        <div ref={wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Search placeholder='Enter a city' name='city' className="search" ref={register({ required: true })}/>
                <Icon showLoupe={showLoupe} elementName='loupe' icon='/loupe.png'/>
            </form>
        </div>
    )
}

export default SearchForm;
