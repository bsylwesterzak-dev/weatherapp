import React, {useRef} from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Header from './Header';
import Content from './Content';
import Logo from '../../../styledComponents/Logo';
import { useSelector } from 'react-redux';
import GsapManager from '../../../utilities/Gsap';

const Alert = () => {
    const isAlert = useSelector(({ appStatesReducer }) => appStatesReducer.isAlert);
    const wrapper = useRef(null);
    GsapManager.animate(wrapper, { transformOrigin: "50% 50%" }, "ScaleAnimation", isAlert)
    return (
        <div className='parentAlert' ref={wrapper}>
            <FlexWrapper style={{opacity:'0'}} bgColor={({theme}) => theme.colors.white} alert sidebar className='alert' direction='column' align='center'>
                <Header />
                <Logo padding='30px 0px 10px 0px' src={process.env.PUBLIC_URL + '/warning.png'} width='30px'/>
                <Content/>
            </FlexWrapper>
        </div>
    )
}

export default Alert;