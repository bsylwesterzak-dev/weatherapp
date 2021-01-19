import React from 'react';
import { useSelector } from 'react-redux';
import EachMainDataInfo from './EachMainDataInfo';

const MainDataInfoWrap = () => {
    const humidity = useSelector(({weatherDataReducer}) => weatherDataReducer.data.humidity);
    const pressure = useSelector(({weatherDataReducer}) => weatherDataReducer.data.pressure);
    let rain = useSelector(({weatherDataReducer}) => weatherDataReducer.data.rain);
    const wind = useSelector(({weatherDataReducer}) => weatherDataReducer.data.wind);


    return (
        <div>
            <EachMainDataInfo icon="/humidity.png" type="Humidity" value={humidity} unit=' %'/>
            <EachMainDataInfo icon="/pressure.png" type="Air Pressure" value={pressure} unit=' PS'/>
            <EachMainDataInfo icon="/rain.png" type="Rain volume for last hour" value={rain} unit=' mm' />
            <EachMainDataInfo icon="/wind.png" type="Wind Speed" value={wind} unit=' km/h'/>
        </div>
    )
}

export default MainDataInfoWrap;