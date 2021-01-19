import styled from 'styled-components';

const Button = styled.button`
    padding: ${({ padding }) => padding};
    border-radius: 100px;
    border: none;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    width: ${({ width }) => width};
    cursor: pointer;
    ${({ loupe }) => loupe && `
            background: none
    `};
    
`;

export default Button;