import styled from 'styled-components';

const LogoNameWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    margin: 20px 0px 0px 20px;
    width: 100%;
    ${({ propsForLoginSignPage }) => propsForLoginSignPage && `
        position: absolute;
        top:0;
        left:0;
    `}
    
`;

export default LogoNameWrapper;