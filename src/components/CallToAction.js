import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
    return (
        <Container>
            <div id="rainbow-blur"></div>
            <button id="resume-btn">Download Resume</button>
            <button id="github">GitHub</button>
            <button id="linkedin">LinkedIn</button>
            <button id="twitter">Twitter</button>
        </Container>
    )
}

const Container = styled.div`

    button {


    }

   
    #twitter {


    }

    #linkedin {
     
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

    #github {
        
       

    }
`;



export default CallToAction
