import React from 'react';
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Logo from '../../../styledComponents/Logo';
import { CHANGE_OPTIONTIME } from '../../../actions/index';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const logout = () => {
        Cookies.remove('jwt')
        dispatch(CHANGE_OPTIONTIME(''))
        history.push('/login')
    }
    return (
        <FlexWrapper direction='row' justify='space-between' align='center'>
            <Logo allmargin='0px 0px 0px 55px' src={process.env.PUBLIC_URL + `/logo.png`} width='70px' />
            <Logo allmargin='30px 20px 0px 0px' onClick={logout} src={process.env.PUBLIC_URL + `/logout.png`} width='37px' />
        </FlexWrapper>
    )
}

export default Navbar;