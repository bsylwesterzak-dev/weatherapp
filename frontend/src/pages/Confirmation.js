import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../Themes/Themes';
import { useParams } from 'react-router-dom';
import ApiManager from '../utilities/ApiManager';
import FlexWrapper from '../styledComponents/FlexWrapper';
import Paragraph from '../styledComponents/Paragraph';
import LogoNameWrapper from '../styledComponents/LogoNameWrapper';
import Logo from '../styledComponents/Logo';
import LoginSignButton from '../components/Login/Button';

const Confirmation = () => {
    const {token} = useParams();
    const [confirmation, setConfirmation] = useState();
    const [confirmationError, setConfirmationError] = useState();
    useEffect(() => {
        const checkConfirmation = async () => {
            try{
                const response = await ApiManager.call('checkConfirmation', {token});
                const data = await response.json();
                if(data.error){
                    setConfirmationError(true)
                }
                if(data.message){
                    setConfirmation(data.message)
                }
            }
            catch(err){
                console.log(err)
            }
        }
        checkConfirmation()
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <>
            <LogoNameWrapper propsForLoginSignPage>
                <Logo src={process.env.PUBLIC_URL + '/logo.png'} width='60px'/>
                <Paragraph color={({ theme }) => theme.colors.black} >Weather App</Paragraph>
            </LogoNameWrapper>
            <FlexWrapper direction='column' justify='center' align='center' height='100vh'>
                <FlexWrapper confirmation direction='column' justify='center' align='center'>
                    {confirmationError ? 
                        <>
                            <Paragraph padding='0px 0px 20px 0px' fontsize='25px'>You dont have an account?</Paragraph> 
                            <Link to='/signup'><LoginSignButton label='Sign in' type='primary'/></Link>
                        </> : 
                        <>
                            <Paragraph fontsize='25px'>Account status:</Paragraph>
                            <Paragraph text='center' color={confirmation === 'You already confirmed your email' ? ({theme}) => theme.colors.warn : ({theme}) => theme.colors.success} padding='20px 0px 20px 0px' fontsize='25px'>{confirmation}</Paragraph>
                            <Link to='/login'><LoginSignButton label='Log in' type='primary'/></Link>
                        </>
                    }
                
                </FlexWrapper>
            </FlexWrapper>
            </>
        </ThemeProvider>
    )
}

export default Confirmation;