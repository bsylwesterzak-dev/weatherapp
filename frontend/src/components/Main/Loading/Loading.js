import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Loader from 'react-loader-spinner';
import Logo from '../../../styledComponents/Logo';

const Loading = () => {
    return (
        <FlexWrapper justify='center' align='center' direction='column' height='100vh'>
            <Loader  type="ThreeDots" color="#0686c2" height={80} width={80} />
            <Logo src={process.env.PUBLIC_URL + `/loading.png`} width='600px'/>
        </FlexWrapper>
    )
}

export default Loading;