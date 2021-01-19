import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexwrap }) => flexwrap};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: ${({ position }) => position};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderadius }) => borderadius};
  background-color: ${({ bgColor }) => bgColor};
  opacity: ${({ opacity }) => opacity};
  filter: ${({ blur }) => blur};
  transition: filter 1s ease-in-out;
  overflow: ${({ overflow }) => overflow};
  display: ${({ display }) => display};
  ${({ loading }) =>
    loading &&
    `
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); 
    `}
  ${({ leftinfo }) =>
    leftinfo &&
    `
        position: absolute;
        top:10%;
        left:60px;
    `}
    ${({ rightinfo }) =>
    rightinfo &&
    `
        position: absolute;
        top:10%;
        right:60px;
    `}
    ${({ widget }) =>
    widget &&
    `
        position: absolute;
        top:35%;
        left:60px;
        
    `};
  ${({ sidebar }) =>
    sidebar &&
    `
        position: absolute;
        height: 65vh;
        width: 22%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin: auto;
        border-radius:20px;
        visibility:hidden;
    `};
  ${({ alert }) =>
    alert &&
    `
        height: 85vh;
        width: 33%;
        padding:0;
        opacity: 0;
    `};
  ${({ alertbanner }) =>
    alertbanner &&
    `
         padding: 21px 60px;
    `}
  ${({ sidebartop }) =>
    sidebartop &&
    `
        position: relative;
        width: 100%;
        height: 27%;
        border-radius: 20px;
        background: rgb(6,65,194);
        background: linear-gradient(90deg, rgba(6,65,194,1) 0%, rgba(6,134,194,1) 62%);
    `}
    ${({ alerttop }) =>
    alerttop &&
    `
        height: 40%;
        width: 101%;
    `}
    ${({ widgets }) =>
    widgets &&
    `
        position: absolute;
        height: 65vh;
        width: 42%;
        top:-18%;
        left:0;
        right:0;
        margin:auto;
        border-radius:20px;
        visibility:hidden; 
        justify-content: center;
        align-items: center;

        > div {
            width: 100%;
        }
    `};
  .widgetDiv:hover img {
    opacity: 1;
  }
  ${({ banner }) =>
    banner &&
    `
        background-color: #ffffff;
        padding: 10px 60px;
        font-size: 10px;
        border-radius: 25px;
        position:absolute;
        bottom:-15px;
        box-shadow: 0px 0px 18px 2px #8E8E8E;
    `}
  ${({ bottomWeather }) =>
    bottomWeather &&
    `
        position: absolute;
        left:0px;
        bottom: 0%;
        flex-direction: column;
        width: 100%;
    `}
    .onedayofweek {
    position: relative;
  }
  ${({ week }) =>
    week &&
    `
        backdrop-filter: blur(10px);
        padding: ${({ padding }) => padding};
        & > :not(:last-child) {
            
            &:after {
                content: "";
                width:1px;
                height:62px;
                background-color:white;
                position: absolute;
                right: -40%;
                top: 37%;
                opacity: 0.75;
            
            }
        }
    `}
  .parentAlert {
    .alice-carousel__stage-item {
      width: 100% !important;
    }
  }
  ${({ widgetCarousel }) =>
    widgetCarousel &&
    `
        .alice-carousel__stage{
                display:block;
  
            }
            .alice-carousel__stage-item{
                    transition: 0.25s;
                    
                    &: hover {
                        transform: scale(1.05);
                    }
             }
    `}

  .alice-carousel__stage {
    position: relative;
    padding-top: 40px;
  }
  .alice-carousel__prev-btn-item {
    position: absolute;
    top: 40%;
    left: 0;
    color: #fff;
    font-size: 30px;
    padding-left: 20px;
  }
  .alice-carousel__next-btn-item {
    position: absolute;
    top: 40%;
    right: 0;
    color: #fff;
    font-size: 30px;
    padding-right: 20px;
  }
  .loader {
    padding: 30px 0px 0px 0px;
  }

  ${({ confirmation }) => confirmation && `
    width: 460px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.1);
    border-radius: 10px;
    background: white;
    padding:30px;
  `}
`;

export default FlexWrapper;
