import styled from 'styled-components';

const Paragraph = styled.p`
    margin:0;
    color: ${({ color }) => color};
    ${({ bold }) => bold && `
        font-weight: bold;
    `}
    font-size: ${({ fontsize }) => fontsize};
    margin: ${({ margin }) => margin};
    text-align: ${({ text }) => text};
    letter-spacing: ${({ letter }) => letter};
    padding: ${({ padding }) => padding};
    opacity: ${({ opacity }) => opacity};
    width: ${({ width }) => width};
    position: ${({ position }) => position};
    background: ${({ background }) => background};
    .thin{
        font-weight: 100;
        opacity: 0.75;
    }

`;

export default Paragraph;