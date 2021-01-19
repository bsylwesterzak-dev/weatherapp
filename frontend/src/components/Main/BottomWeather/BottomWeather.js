import React from 'react';
import Week from './Week';
import Hours from './Hours';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import { useSelector } from 'react-redux';

const BottomWeather = () => {
    const timeOption = useSelector(({ appStatesReducer }) => appStatesReducer.optionTime);
    return (
        <FlexWrapper bottomWeather>
            {timeOption === 'daily' ? <Week /> : timeOption === 'hourly' ? <Hours /> : <p></p> }
        </FlexWrapper>
    )
}

export default BottomWeather;