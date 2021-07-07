import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
    return (
        <Container>
            <div id="rainbow-blur"></div>
            <button id="resume-btn">View Resume</button>
            <button id="github">GitHub</button>
            <button id="linkedin">LinkedIn</button>
        </Container>
    )
}

const Container = styled.div`

    button {


    }

    #github {
        position: absolute;
        width: 428px;
        height: 64px;
        left: calc(50% - 430px/2 - 218px);
        top: 600px;

        background: #242526;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;

        font-family: VT323;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 24px;
        color: #FFFFFF;

        @media (max-width: 769px) {
            width: 343px;
            height: 48px;
            left: calc(50% - 343px/2 + 0.5px);
            top: 580px;
        }

        /* iPhone Pro Max */
        @media (max-width: 415px) {
            width: 182px;
            height: 26px;
            left: calc(50% - 182px/2 + 1px);
            top: 320px;

            font-size: 14px;
            line-height: 14px;
        }
       

    }

   
    #linkedin {
        position: absolute;
        width: 428px;
        height: 64px;
        left: calc(50% - 418px/2 + 214px);
        top: 600px;

        background: #242526;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
        font-family: VT323;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 24px;
        color: #FFFFFF;

        @media (max-width: 769px) {
        width: 343px;
        height: 48px;
        left: calc(50% - 343px/2 + 0.5px);
        top: 640px;   
        }

        /* iPhone Pro Max */
        @media (max-width: 415px) {
            width: 182px;
            height: 24px;
            left: calc(50% - 182px/2 + 1px);
            top: 355px;
            font-size: 14px;
            line-height: 14px;
        }
     
    }

    #resume-btn {

        position: absolute;
        width: 859.88px;
        height: 62.66px;
        left: calc(50% - 859.88px/2 - 0.39px);
        top: 500px;

        background: #2BD37E;
        border-radius: 10px;
        
        font-family: VT323;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 24px;
        border: none;


        @media (max-width: 769px) {
           width: 345.04px;
            height: 53.37px;
            left: calc(50% - 345.04px/2 + 1.45px);
            top: 500px;
        }

        /* iPhone Pro Max */
        @media (max-width: 415px) {
            position: absolute;
            width: 182.45px;
            height: 35.58px;
            left: calc(50% - 182.45px/2 + 0.77px);
            top: 260px;

            background: #2BD37E;
            border-radius: 10px;

            font-size: 14px;
            line-height: 14px;
            
        }

    }

    #rainbow-blur {

        position: absolute;
        width: 862px;
        height: 63px;
        left: calc(50% - 862px/2 - 1px);
        top: 500px;

        background: linear-gradient(90.5deg, #A84C4C -0.31%, #29C6F8 -0.3%, #B432E2 41.58%, #E95110 101.5%);
        filter: blur(15px);
        border-radius: 10px;

        @media (max-width: 769px) {
            position: absolute;
            width: 345.89px;
            height: 53.66px;
            left: calc(50% - 345.89px/2 + 1.2px);
            top: 500px;

            background: linear-gradient(90.5deg, #A84C4C -0.31%, #29C6F8 -0.3%, #B432E2 41.58%, #E95110 101.5%);
            filter: blur(20px);
            border-radius: 10px;
        };
      
        @media (max-width: 415px) {

            position: absolute;
            width: 182.9px;
            height: 35.77px;
            left: calc(50% - 182.9px/2 + 0.64px);
            top: 260px;

            background: linear-gradient(90.5deg, #A84C4C -0.31%, #29C6F8 -0.3%, #B432E2 41.58%, #E95110 101.5%);
            filter: blur(15px);
            border-radius: 10px;

            border-radius: 10px;

        }

    }

    
`;



export default CallToAction
