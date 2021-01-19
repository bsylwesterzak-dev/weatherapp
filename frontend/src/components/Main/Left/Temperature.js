import React from 'react';
import { useSelector } from 'react-redux';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Header from '../../../styledComponents/Header';
import Paragraph from '../../../styledComponents/Paragraph';

const Temperature = () => {
    const temp = useSelector(({weatherDataReducer}) => weatherDataReducer.data.temp);
    const feels_like = useSelector(({weatherDataReducer}) => weatherDataReducer.data.feels_like);
    
    return (
        <FlexWrapper direction='column'>
            <Header color={({ theme }) => theme.colors.white} margin='20px 0px 0px 0px' fontsize='70px'>{temp}°C</Header>
            <Paragraph color={({ theme }) => theme.colors.white} margin='20px 0px 0px 0px' letter='2px' >FEELS LIKE {feels_like}°C</Paragraph> 
        </FlexWrapper> 
    )
}

export default Temperature;