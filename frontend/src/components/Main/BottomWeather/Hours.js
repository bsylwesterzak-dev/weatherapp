import React from 'react';
import { useSelector } from 'react-redux';
import Paragraph from '../../../styledComponents/Paragraph';
import { dtToDate } from '../functions/dtToDate';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Logo from '../../../styledComponents/Logo';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {hoursResponsive} from '../../../utilities/Responsive';

const Hours = () => {
    const hourlyData = useSelector(({ weatherDataReducer }) => weatherDataReducer.hours);
    let hoursWeather;
    if(Array.isArray(hourlyData)){
        hoursWeather = hourlyData.map(hour => {
            return (
                <FlexWrapper className='onedayofweek' key={hour.dt} direction='column' align='center' padding='0px 0px 0px 0px'>
                    <Paragraph opacity='0.75' fontsize='16px' margin='0' color={({ theme }) => theme.colors.white}>{dtToDate(hour.dt).weekday} {dtToDate(hour.dt).hour}</Paragraph>
                    <Paragraph bold margin='10px 0px 0px 0px' fontsize='28px' color={({ theme }) => theme.colors.white}>{Math.round(hour.temp * 10) / 10}<span className='thin'>°C</span></Paragraph>
                    <Logo width='70px' src={'http://openweathermap.org/img/wn/' + hour.weather[0].icon + '@2x.png'}/>
                    <Paragraph margin='0' color={({ theme }) => theme.colors.white}>{hour.weather[0].description}</Paragraph>
                </FlexWrapper>
            )
        }) 
    }
    return (
        <FlexWrapper week>
            {Array.isArray(hourlyData) ? <AliceCarousel items={hoursWeather} responsive={hoursResponsive}/> : <Paragraph width='100%' text='center' padding='50px' color={({ theme }) => theme.colors.white}>There is no weekly forecast available for this particular city</Paragraph>}
        </FlexWrapper>
        
    )
}

export default Hours