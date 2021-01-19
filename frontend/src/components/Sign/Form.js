import React, { useState } from 'react';
import ApiManager from '../../utilities/ApiManager';
import Toast from '../../utilities/Toast';
import { useHistory, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from '../../styledComponents/Input';
import LoginSignButton from '../Login/Button';
import LinkSpan from '../../styledComponents/Link';
import FlexWrapper from '../../styledComponents/FlexWrapper';
import InputWrapper from '../../styledComponents/InputWrapper';
import Span from '../../styledComponents/Span';
import Paragraph from '../../styledComponents/Paragraph';
import { SET_GUEST_STATE } from '../../actions/index';


const Form = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const [ errorsEmail, setErrorsEmail ] = useState('');
    const [ errorsPassword, setErrorsPassword ] = useState('');
    

    const onSubmit = async ({ email, password, confirmpassword }) => {
        if(password !== confirmpassword){
            Toast.toastMessage('Passwords are not the same', 'error')
        }
        else{
            try{
                const res = await ApiManager.call('signup',{
                    email, password 
                })
                const data = await res.json();
                if(data.errors) {
                    setErrorsEmail(data.errors.email);
                    setErrorsPassword(data.error.password);
                }
                else{
                    Toast.toastMessage('Successfully registered! Please click the activation link we sent to your email', 'success')
                    setTimeout(() => {
                        history.push("/login");
                    }, 3000)
                   
                }
            }
            catch (err) {
                console.log(err)
            }
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
                <InputWrapper>
                <Input
                type='password'
                placeholder='Confirm Password' 
                name='confirmpassword' 
                ref={register({
                    
                    required: 'You need to confirm your password'
                })}
                />
                <Span>Confirm Password</Span>
            </InputWrapper>
            {errors.confirmpassword && <Paragraph color={({ theme }) => theme.colors.error}>You need to confirm your password</Paragraph>}
            <FlexWrapper direction='row' justify='center' align='center' width='100%'>
               <Link to='/login'><LinkSpan loginsign margin='10px 0px 20px 0px' linkcolor={({theme }) =>  theme.colors.grey}>Already have an account?</LinkSpan></Link>
            </FlexWrapper>
            <FlexWrapper padding='10px 0px 0px 0px' direction='row' justify='space-between' align='center' width='100%'>
                <LoginSignButton label='Sign in' type='primary'/>
                <LoginSignButton buttonType='button' label='Guest' type='secondary' guest='true'/>
            </FlexWrapper>
        </form>
    )
}

export default Form;