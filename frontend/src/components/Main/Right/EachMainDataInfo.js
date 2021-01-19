import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Paragraph from '../../../styledComponents/Paragraph';
import Logo from '../../../styledComponents/Logo';


const EachMainDataInfo = ({type, value, icon, unit}) => {
    return (
        <FlexWrapper direction='row' padding='0px 0px 40px 0px'>
            <FlexWrapper direction='column'>
                <Logo src={process.env.PUBLIC_URL + `${icon}`} width='30px'/>
            </FlexWrapper>
            <FlexWrapper direction='column' padding='0px 0px 0px 20px'>
                <Paragraph  color={({ theme }) => theme.colors.white} margin='0px 0px 10px 0px' fontsize='19px'>{type}</Paragraph>
                <Paragraph  color={({ theme }) => theme.colors.white}  margin='0' fontsize='25px' bold >{value}{unit}</Paragraph>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default EachMainDataInfo;