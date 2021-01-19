import styled from 'styled-components';

const Background = styled.div`
    background: url(${({ url }) => url});
    background-position: ${( { bgPosition }) => bgPosition};
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    filter: ${({ blur }) => blur};
    transition: filter 1s ease-in-out;
    ${({ loginandsignup }) => loginandsignup && `
        flex:1;
    `}
    ${({ mainbackground }) => mainbackground && `
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
    `}
    flex-direction: column;
`;

export default Background;