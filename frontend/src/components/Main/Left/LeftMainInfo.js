import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import DataCity from './DataCity';
import Temperature from './Temperature';
const LeftMainInfo = () => {
    return (
        <FlexWrapper leftinfo direction='column' >
            <DataCity />
            <Temperature />
        </FlexWrapper>
    )
}

export default LeftMainInfo;