import React, { useRef } from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Logo from '../../../styledComponents/Logo';
import Paragraph from '../../../styledComponents/Paragraph';
import WeatherOptionLinks from './WeatherOptionsLinks';
import { useSelector } from 'react-redux';
import {SET_SIDEBAR_STATE} from '../../../actions/index';
import { useDispatch } from 'react-redux';
import GsapManager from '../../../utilities/Gsap';
const SideBar = () => {
    const isAlert = useSelector(({ appStatesReducer }) => appStatesReducer.isAlert);
    const isSidebar = useSelector(({ appStatesReducer }) => appStatesReducer.isSidebar);
    const wrapper = useRef(null);

    GsapManager.animate(wrapper, { transformOrigin: "50% 100%" }, "ScaleYAnimation", isSidebar)

    const dispatch = useDispatch();
    const blur = () => {
        if(isAlert === true){
          return 'blur(20px)'
        }
        else{
          return null
        }
      }
      const closeSideBar = () => {
        dispatch(SET_SIDEBAR_STATE(false))
      }
      
    return (
      <div ref={wrapper}>
        <FlexWrapper style={{opacity:'0'}} blur={blur} sidebar bgColor={({ theme }) => theme.colors.white}  direction='column' align='center' className='sidebar'>
            <FlexWrapper sidebartop direction='column' justify='center' align='center'>
                <Logo src={process.env.PUBLIC_URL + '/whitelogo.png'} width='35px' sidebarlogo/>
                <Logo onClick={closeSideBar} x src={process.env.PUBLIC_URL + '/cancel.png'} width='20px' className='x' />
                <Paragraph fontsize='18px' margin='10px 0px 10px 0px' color={({ theme }) => theme.colors.white} text='center'>Weather App</Paragraph>
                <Logo src={process.env.PUBLIC_URL + '/user.png'} width='25px'/>
                <FlexWrapper banner direction='row' align='center' justify='center'>
                    <FlexWrapper bgColor={({ theme }) => theme.colors.main} width='5px' height='5px' borderadius='100px'></FlexWrapper>
                    <Paragraph padding='0px 0px 0px 10px'>Forecasts</Paragraph>
                </FlexWrapper>
            </FlexWrapper>
            <WeatherOptionLinks />
        </FlexWrapper>
      </div>
    )
}

export default SideBar;