import React from 'react';
import ApiManager from '../../../utilities/ApiManager';
import { useSelector } from 'react-redux';
import { useCookies } from "react-cookie";
import { useDispatch } from 'react-redux';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Paragraph from '../../../styledComponents/Paragraph';
import Header from '../../../styledComponents/Header';
import Logo from '../../../styledComponents/Logo';
import { SET_WIDGET_DATA } from '../../../actions/index';

const DataCity = () => {
    const city = useSelector(({weatherDataReducer}) => weatherDataReducer.data.city);
    const isGuest = useSelector(({appStatesReducer}) => appStatesReducer.isGuest);

    const display = () => {
        return isGuest ? 'none' : 'flex'
    }

    const [cookies] = useCookies();
    const dispatch = useDispatch();
    const addWidget = async () => {
        const res = await ApiManager.call('addwidget',{
            city: cookies.currentCity,
            jwt: cookies.jwt
        })
        dispatch(SET_WIDGET_DATA({city: cookies.currentCity}))
    }
    return (
        <FlexWrapper direction='column' >
            <Paragraph color={({ theme }) => theme.colors.main} bold fontsize='20px' margin='0'>{cookies.day} {cookies.month}</Paragraph>
            <FlexWrapper direction='row' align='center' justify='flex-start'>
                <Header color={({ theme }) => theme.colors.white} fontsize='40px' margin='15px 0px 0px 0px' >{city}</Header>
                <Logo display={display} allmargin='15px 0px 0px 10px'  onClick={addWidget}  src={process.env.PUBLIC_URL + `/plus.png`} width='25px'/>
            </FlexWrapper>  
        </FlexWrapper>

    )
}

export default DataCity;