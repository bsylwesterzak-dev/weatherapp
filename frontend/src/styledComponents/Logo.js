import styled from 'styled-components';
const Logo = styled.img`
    object-fit: contain;
    width: ${({ width }) => width};
    margin-right: ${({ margin }) => margin};
    margin: ${({ allmargin }) => allmargin};
    padding: ${({ padding }) => padding};
    display: ${({ display }) => display};
    ${({ loupe }) => loupe && `
        position: absolute;
        z-index:2;
    `}
    ${({ x }) => x && `
        position: absolute;
        top:10px;
        right:10px;
    `}
    ${({ widgetX }) => widgetX && `
        opacity:0;
        transition: 0.25s opacity;
    `}
    ${({ sidebarlogo }) => sidebarlogo && `
        position: absolute;
        top:10px;
        left:10px;
    `}
    cursor: pointer;
`;

export default Logo;