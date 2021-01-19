import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FlexWrapper from '../../styledComponents/FlexWrapper';
import Form from './Form';
import Logo from '../../styledComponents/Logo';
import Header from '../../styledComponents/Header';
import Paragraph from '../../styledComponents/Paragraph';
import { SET_GUEST_STATE } from '../../actions/index';
import { ToastContainer } from 'react-toastify';
const RightSide = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(SET_GUEST_STATE(false))
    }, [])
    return (
        <FlexWrapper direction='column' justify='center' align='center' flex='1'>
            <FlexWrapper direction='column' justify='center' align='center' height='70vh' >
                <Logo src={process.env.PUBLIC_URL + '/logo.png'} width='170px'/>
                <Header>Sign Up</Header>
                <Paragraph>and check the weather anywhere on the Earth</Paragraph>
                <Form />
                
            </FlexWrapper>
            <ToastContainer
                position="top-right" 
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
        </FlexWrapper>
    )
}

export default RightSide;