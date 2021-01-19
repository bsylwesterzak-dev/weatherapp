import React, { useEffect } from 'react'
import MainWrapper from '../styledComponents/MainWrapper';
import Background from '../styledComponents/Background';
import RightSide from '../components/Login/RightSide';
import { ThemeProvider } from 'styled-components';
import { useHistory } from 'react-router-dom';
import theme from '../Themes/Themes';
import LogoNameWrapper from '../styledComponents/LogoNameWrapper';
import Logo from '../styledComponents/Logo';
import Paragraph from '../styledComponents/Paragraph';
import Cookies from "js-cookie";

const LoginPage = () => {
    const history = useHistory();
    useEffect(() => {
        if(Cookies.get("jwt")){
            history.push('/main')
        }
    },[])
    return (
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <Background loginandsignup bgPosition="right" url={process.env.PUBLIC_URL + '/loginBg.png'}>
                    <LogoNameWrapper propsForLoginSignPage>
                        <Logo src={process.env.PUBLIC_URL + '/logo.png'} width='60px'/>
                        <Paragraph color={({ theme }) => theme.colors.white} bold>Weather App</Paragraph>
                    </LogoNameWrapper>
                </Background>
                <RightSide></RightSide>
            </MainWrapper>
        </ThemeProvider>
    )
}

export default LoginPage;