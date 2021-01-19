import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import { useSelector } from 'react-redux';
import Paragraph from '../../../styledComponents/Paragraph';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {alertResponsive} from '../../../utilities/Responsive';

const Content = () => {
    const alerts = useSelector(({ weatherDataReducer }) => weatherDataReducer.alert);
    let alertContent;
    if(Array.isArray(alerts)){
        alertContent = alerts.map(alert => {
            return (
                <FlexWrapper direction='column' align='center' justify='center'>
                    <Paragraph margin='0px 0px 10px 0px' color={({theme}) => theme.colors.main} fontsize='20px'>Sender Name</Paragraph>
                    <Paragraph text='center'>{alert.sender_name}</Paragraph>
                    <Paragraph margin='0px 0px 10px 0px' padding='20px 0px 0px 0px' color={({theme}) => theme.colors.main} fontsize='20px'>Event</Paragraph>
                    <Paragraph padding='0px 0px 20px 0px' text='center'>{alert.event}</Paragraph>
                    <Paragraph margin='0px 0px 10px 0px'color={({theme}) => theme.colors.main} fontsize='20px'>Description</Paragraph>
                    <FlexWrapper>
                        <Paragraph margin='0px 10px 0px 10px' text='center'>{alert.description}</Paragraph>
                    </FlexWrapper>
                </FlexWrapper>
            )
        })
    }

   return alertContent ? (<AliceCarousel items={alertContent} responsive={alertResponsive}/>) : (<Paragraph fontsize='20px'>There is no alert</Paragraph>)
 
}

export default Content;