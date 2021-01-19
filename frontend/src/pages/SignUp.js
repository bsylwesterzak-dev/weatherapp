import React from 'react'
import MainWrapper from '../styledComponents/MainWrapper';
import Background from '../styledComponents/Background';
import RightSide from '../components/Sign/RightSide';
import { ThemeProvider } from 'styled-components';
import theme from '../Themes/Themes';
import LogoNameWrapper from '../styledComponents/LogoNameWrapper';
import Logo from '../styledComponents/Logo';
import Paragraph from '../styledComponents/Paragraph';
const SingUpPage = () => {
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

export default SingUpPage;