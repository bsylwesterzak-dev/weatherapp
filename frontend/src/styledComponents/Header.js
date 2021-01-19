import styled from 'styled-components';

const Header = styled.h1`
    margin: 0;
    color: ${({ color }) => color};
    font-size: ${({ fontsize }) => fontsize};
    margin: ${({ margin }) => margin};
`;

export default Header;