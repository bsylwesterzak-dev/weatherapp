import styled from 'styled-components';

const Link = styled.a`
    color: ${({ linkcolor }) => linkcolor};
    text-align: ${({ align }) => align};
    text-decoration: none;
    margin: ${({ margin }) =>  margin};
    font-size: ${({ fontsize }) => fontsize};
    padding: ${({ padding }) => padding};
    &:hover {
        ${({ loginsign }) => loginsign && `
            color: #0686c2;
        `};
    }
    cursor: pointer;
`;

export default Link;