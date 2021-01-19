import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Logo from '../../../styledComponents/Logo';
import Paragraph from '../../../styledComponents/Paragraph';
import {SET_ALERT_STATE} from '../../../actions/index';
import { useDispatch } from 'react-redux';
import { useCookies } from "react-cookie";

const Header = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies();

    return (
        <FlexWrapper alerttop sidebartop direction='column' justify='center' align='center'>
            <Logo src={process.env.PUBLIC_URL + '/whitelogo.png'} width='35px' sidebarlogo/>
            <Logo onClick={() => dispatch(SET_ALERT_STATE())} x src={process.env.PUBLIC_URL + '/cancel.png'} width='20px' className='x' />
            <Paragraph fontsize='25px' margin='10px 0px 10px 0px' color={({ theme }) => theme.colors.white} text='center'>Alert</Paragraph>
            <FlexWrapper alertbanner banner direction='row' align='center' justify='center'>
                <FlexWrapper bgColor={({ theme }) => theme.colors.main} width='5px' height='5px' borderadius='100px'></FlexWrapper>
                <Paragraph fontsize='17px' padding='0px 0px 0px 10px'>{cookies.currentCity}</Paragraph>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Header;