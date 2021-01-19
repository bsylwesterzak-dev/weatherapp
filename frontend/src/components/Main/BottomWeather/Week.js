import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Paragraph from '../../../styledComponents/Paragraph';
import Logo from '../../../styledComponents/Logo';
import { useSelector } from 'react-redux';
import { dtToDate } from '../functions/dtToDate';
const Week = () => {

    const weekData = useSelector(({ weatherDataReducer }) => weatherDataReducer.week);
    let weekWeather
    if(weekData !== null){
        weekWeather =  Array.isArray(weekData) ? weekData.map(day => {
            return (
                <FlexWrapper className='onedayofweek' key={day.dt} direction='column' align='center' padding='0px 0px 0px 0px'>
                    <Paragraph opacity='0.75' fontsize='16px' margin='0px 0px 10px 0px' color={({ theme }) => theme.colors.white}>{dtToDate(day.dt).weekday}</Paragraph>
                    <FlexWrapper direction='row'  >
                        <Logo  src={process.env.PUBLIC_URL + '/sun.png'} width='20px'/>
                        <Paragraph bold fontsize='28px' margin='0px 0px 0px 10px'  color={({ theme }) => theme.colors.white}>{Math.round(day.temp.day)}<span className='thin'>°C</span></Paragraph>
                    </FlexWrapper>
                    <FlexWrapper direction='row'>
                        <Logo  src={process.env.PUBLIC_URL + '/moon.png'} width='20px'/>
                        <Paragraph bold fontsize='28px' margin='0px 0px 0px 10px'  color={({ theme }) => theme.colors.white}>{Math.round(day.temp.night)}<span className='thin'>°C</span></Paragraph>
                    </FlexWrapper>
                </FlexWrapper>
            )
        }) : <Paragraph color={({ theme }) => theme.colors.white}>There is no weekly forecast available for this particular city</Paragraph>
    }
    return (
        <FlexWrapper padding='35px' week direction='row' justify='space-around'>
         {weekWeather}
        </FlexWrapper>
    )
}

export default Week;