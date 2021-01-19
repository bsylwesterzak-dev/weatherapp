import React, {useEffect, useState} from 'react';
import ApiManager from '../../../utilities/ApiManager';
import Paragraph from '../../../styledComponents/Paragraph';
import Logo from '../../../styledComponents/Logo';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import { removeSpecialChars } from '../functions/removeSpecialChars';
import Loader from 'react-loader-spinner'
require('dotenv').config();

const Temp = ({city}) => {
    let [temp, setTemp] = useState();
    useEffect(() => {
        const getTemp = async () => {
            const response = await ApiManager.call('weather',{
                city: removeSpecialChars(city),
                weather: 'current'
            })
            const {data} = await response.json();
            data.status = response.status
            setTemp(data)
        }
        getTemp();
    },[])
    if(!temp) return <FlexWrapper direction='column' justify='center' align='center' height='100%'>
        <Loader
        className='loader'
        type="Circles"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
 />
    </FlexWrapper>
    return temp && temp.status === 200 ? (
        <FlexWrapper direction='column' align='center' justify='center'>
            <Logo src={process.env.REACT_APP_ICON_LINK + temp.weather[0].icon + '@2x.png'}/>
            <Paragraph color={({theme}) => theme.colors.white}>{temp.temp}°C</Paragraph>
        </FlexWrapper>
    )
    : (
            <Logo allmargin='30px 0px 0px 0px' src={process.env.PUBLIC_URL + `/nowidgets.png`} />
    )
    
}

export default Temp;