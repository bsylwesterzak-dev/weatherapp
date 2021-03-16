import React, { useState } from 'react';
import ApiManager from '../../utilities/ApiManager';
import { useCookies } from "react-cookie";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Input from '../../styledComponents/Input';
import LoginSignButton from './Button';
import LinkSpan from '../../styledComponents/Link';
import FlexWrapper from '../../styledComponents/FlexWrapper';
import InputWrapper from '../../styledComponents/InputWrapper';
import Span from '../../styledComponents/Span';
import Paragraph from '../../styledComponents/Paragraph';
import { useForm } from 'react-hook-form';
import Toast from '../../utilities/Toast';
import { SET_GUEST_STATE } from '../../actions/index';

const Form = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const [ errorsEmail, setErrorsEmail ] = useState('');
    const [ errorsPassword, setErrorsPassword ] = useState('');
    const [cookies, setCookie] = useCookies([]);

    const onSubmit = async ({ email, password }) => {
        try{
            const res = await ApiManager.call('login',{ email, password } )
            const data = await res.json();
            if(data.errors) {
                setErrorsEmail(data.errors.email);
                setErrorsPassword(data.errors.password);
            }
            else if(data.active === false){
                Toast.toastMessage('You need to confirm your email address by clicking the activation link we sent to your e-mail', 'warn')
            }
            else{
                setCookie("jwt", `${data.jwt}`, {
                    path: "/"
                });
                setCookie("user", `${data.name}`, {
                    path: "/"
                });
                history.push("/main");
            }
            
        }
        catch (err) {
            console.log(err)
        }
    }
    const guestPage = () => {
        dispatch(SET_GUEST_STATE(true))
        history.push('/main')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
            <Input 
            autoComplete='off'
            placeholder='Email' 
            name='email'
            ref={register({
                required: "Email is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
            })} 
            />
            <Span>Email</Span>
        </InputWrapper>
    {errors.email ? <Paragraph color={({ theme }) => theme.colors.error}>{errors.email.message}</Paragraph> : <Paragraph color={({ theme }) => theme.colors.error}>{errorsEmail}</Paragraph>}
    <InputWrapper>
        <Input
        type='password'
        placeholder='Password' 
        name='password' 
        ref={register({
            minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
            },
            required: 'Password is required'
        })}
        />
        <Span>Password</Span>
    </InputWrapper>
    {errors.password ? <Paragraph color={({ theme }) => theme.colors.error}>{errors.password.message}</Paragraph> : <Paragraph color={({ theme }) => theme.colors.error}>{errorsPassword}</Paragraph>}
            <FlexWrapper direction='row' justify='center' align='center' width='100%'>
                <Link style={{ textAlign: 'center' }} to='/signup'><LinkSpan align='center' margin='10px 0px 20px 0px' loginsign linkcolor={({theme }) =>  theme.colors.grey}>You do not have an account?<br /> Sign up now</LinkSpan></Link>
            </FlexWrapper>
            <FlexWrapper padding='10px 0px 0px 0px' direction='row' justify='space-between' align='center' width='100%'>
                <LoginSignButton label='Log in' type='primary'/>
                <LoginSignButton guest={guestPage} buttonType='button' label='Guest' type='secondary' />
            </FlexWrapper>
        </form>
    )
}

export default Form;