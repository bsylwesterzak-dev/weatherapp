import React from 'react';
import Link from '../../../styledComponents/Link';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Logo from '../../../styledComponents/Logo';

const SingleLink = ({linkname, url, getWeatherData}) => {
    return (
        <FlexWrapper borderadius='7px'  direction='row' justify='space-between'  sidebarBgColor={({ theme }) => theme.colors.white}  align='center' width='100%'>
             <FlexWrapper>
                <Logo src={process.env.PUBLIC_URL + `${url}`} width='20px' />
                <Link onClick={getWeatherData} padding='0px 0px 0px 20px' className='sidebarlink' fontsize="18px" linkcolor={({theme}) => theme.colors.black}>{linkname}</Link>
            </FlexWrapper>
            <Logo src={process.env.PUBLIC_URL + `/arrow.png`} width='10px' margin='30px'/>
        </FlexWrapper>
    )
}

export default SingleLink;