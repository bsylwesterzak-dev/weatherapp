import React from 'react';
import ApiManager from '../../../utilities/ApiManager';
import { useCookies } from "react-cookie";
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import SingleLink from './SingleLink';
import { GET_WEEK_WEATHER, GET_HOURS_WEATHER, CHANGE_OPTIONTIME, SET_ALERT_DATA, SET_ALERT_STATE, SET_SIDEBAR_STATE } from '../../../actions/index';
import { useDispatch } from 'react-redux';
import { removeSpecialChars } from '../functions/removeSpecialChars';

const WeatherOptionLinks = () => {
    const [cookies] = useCookies();
    const dispatch = useDispatch();
    const getWeatherData = async (parametr) => {
        const response = await ApiManager.call('weather',{
            city: removeSpecialChars(cookies.currentCity),
            weather: parametr
        })        
        const {data} = await response.json();
        if(parametr === 'daily'){
            dispatch(GET_WEEK_WEATHER(data));
            dispatch(CHANGE_OPTIONTIME('daily'));
            dispatch(SET_SIDEBAR_STATE(false));
        }
        else if(parametr === 'hourly'){
            dispatch(GET_HOURS_WEATHER(data));
            dispatch(CHANGE_OPTIONTIME('hourly'));
            dispatch(SET_SIDEBAR_STATE(false));
        }
        else if(parametr === 'alerts'){
            dispatch(SET_ALERT_DATA(data));
            dispatch(SET_ALERT_STATE());
            
        }
    }
    
    return (
        <FlexWrapper padding='20px 0px 0px 30px' direction='column' width='100%' justify='space-around' align='flex-start' flexwrap='wrap' height='70%'>
            <SingleLink getWeatherData={() => getWeatherData('daily')} url='/7.png' linkname='7 days' />
            <SingleLink getWeatherData={() => getWeatherData('hourly')} url='/14.png' linkname='48 hours' />
            <SingleLink getWeatherData={() => getWeatherData('alerts')} url='/alert.png' linkname='Alerts' />
        </FlexWrapper>
    )
}

export default WeatherOptionLinks;