import React, { useEffect } from 'react';
import ApiManager from '../../../utilities/ApiManager';
import { useDispatch } from 'react-redux';
import { GET_CURRENT_WEATHER, SET_WIDGET_DATA , GET_WEEK_WEATHER, GET_HOURS_WEATHER, DELETE_WIDGET } from '../../../actions/index';
import { useCookies } from "react-cookie";
import { useSelector } from 'react-redux';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Paragraph from '../../../styledComponents/Paragraph';
import Logo from '../../../styledComponents/Logo';
import Temp from './Temp';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { removeSpecialChars } from '../functions/removeSpecialChars';
import {widgetResponsive} from '../../../utilities/Responsive';


const City = () => {
    const [cookies, setCookie] = useCookies();
    const dispatch = useDispatch();
    const widgets = useSelector(({weatherDataReducer}) => weatherDataReducer.widgets);
    const optionTime = useSelector(({appStatesReducer}) => appStatesReducer.optionTime);

    useEffect(() => {
        const showWidgets = async () => {
            const response = await ApiManager.call('widgets',{
                jwt: cookies.jwt
            })
            const data = await response.json();
            dispatch(SET_WIDGET_DATA(data));
        }
        showWidgets();
    },[])
    const showCurrentWeatherBasedOnClickedWidget = async (city) => {
        
        const response = await ApiManager.call('weather',{
                city: removeSpecialChars(city),
                weather: 'current'
        })
        const {data} = await response.json();
        console.log(data)
        if(Object.keys(data).length){
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
                city: removeSpecialChars((city)),
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
        }else {
            return
        }
        
    }

    const deleteWidget = async(e, city) => {
        e.stopPropagation();
        dispatch(DELETE_WIDGET(city));
        const response = await ApiManager.call('deleteWidget',{
            jwt: cookies.jwt,
            city
        })
        

    }

    let allwidgets = widgets ? widgets.map(widget => {
        return (
            <FlexWrapper height='100%' className='widgetDiv' direction='column' justify='center' align='center' onClick={() => showCurrentWeatherBasedOnClickedWidget(widget.city)}>
                <Logo  onClick={(e) => deleteWidget(e, widget.city)} widgetX src={process.env.PUBLIC_URL + '/cancel.png'} width='20px'/>
                <Paragraph fontsize='20px' color={({theme}) => theme.colors.white}>{widget.city}</Paragraph>
                <Temp city={widget.city}/>
            </FlexWrapper>
        )
    }) : null

    return (
           allwidgets.length ? <FlexWrapper widgetCarousel><AliceCarousel items={allwidgets} responsive={widgetResponsive}/></FlexWrapper> : <Paragraph color={({ theme }) => theme.colors.white} background='rgba(0, 0, 0, .25)' padding='12px' >You don't have any widgets</Paragraph>
    )
}

export default City;