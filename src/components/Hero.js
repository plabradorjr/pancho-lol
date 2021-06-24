import React from 'react';
import styled from 'styled-components';


const Hero = () => {
    return (
        <div>
            <Hello>
              <div>Hello,</div>
            </Hello>
            <Pancho>
              <div>I'm Pancho</div>
            </Pancho>
            <FullStack>
                <div>Full-Stack Web Developer</div>
            </FullStack>
        </div>
      )
    }
    
const Hello = styled.div`
    position: absolute;
    left: 35.35%;
    right: 58.61%;
    top: 8.06%;
    bottom: 89.79%;
    font-family: VT323;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 36px;
    /* identical to box height */
    color: #26FA8E;

    @media (max-width: 1440px) {
    left: 30.21%;
    right: 58.46%;
    top: 13.67%;
    bottom: 82.81%;
    }

    @media (max-width: 768px) {
    left: 20.77%;
    right: 65.22%;
    top: 16.96%;
    bottom: 80.36%;

    font-size: 24px;
    line-height: 24px;
    }

    @media (max-width: 410px) {
    left: 12.19%;
    right: 69.69%;
    top: 16.73%;
    bottom: 79.05%;

    font-size: 24px;
    line-height: 24px;
    }

    `;
    
const Pancho = styled.div`
    position: absolute;
    left: 35%;
    right: 31.6%;
    top: 10.21%;
    bottom: 83.04%;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 112px;
    
    background-image: -webkit-linear-gradient(60deg, #0FA3F7 13.56%, rgba(125, 31, 214, 0.864062) 55.06%, rgba(238, 88, 41, 0.96) 91.4%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* iPad mini */
    @media (max-width: 1440px) {
    left: 30.21%;
    right: 18.75%;
    top: 17.58%;
    bottom: 73.44%;

    font-size: 64px;
    line-height: 75px;
    }

    /* iPhone Pro Max */
    @media (max-width: 768px) {
    left: 20.77%;
    right: 21.01%;
    top: 19.64%;
    bottom: 74.11%;

    font-size: 48px;
    line-height: 56px;
    }

    /* iPhone SE */
    @media (max-width: 410px) {
    left: 12.19%;
    right: 12.5%;
    top: 20.95%;
    bottom: 69.19%;
    }
`;

const FullStack = styled.div`

    position: absolute;
    left: 35.21%;
    right: 40.76%;
    top: 16.96%;
    bottom: 80.9%;

    font-family: VT323;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 36px;

    color: #26FA8E;

@media (max-width: 1440px) {
    left: 30.21%;
    right: 24.74%;
    top: 25%;
    bottom: 71.48%;
}
@media (max-width: 768px) {
    left: 20.77%;
    right: 23.43%;
    top: 25.89%;
    bottom: 71.43%;

    font-size: 24px;
    line-height: 24px;
}
@media (max-width: 410px) {
    left: 12.19%;
    right: 15.62%;
    top: 30.81%;
    bottom: 64.96%;

}
`;

export default Hero
