import React from 'react';
import styled from 'styled-components';


const Hero = () => {
    return (
        <Container>
            <h2 id="hello">Hello,</h2>
            <h1 id="pancho">I'm Pancho</h1>
            <h2 id="fullstack">Full-Stack Web Developer</h2>
        </Container>
      )
    }

const Container = styled.div`

    position: absolute;
    width: 952px;
    height: 397px;
    left: calc(50% - 952px/2);
    top: 163px;

    #hello {
        position: absolute;
        width: 87px;
        height: 36px;
        left: calc(50% - 87px/2 + 13.5px);
        top: 0px;

        font-family: VT323;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 36px;
        /* identical to box height */

        color: #26FA8E;

        /* iPad mini */
        @media (max-width: 769px) {
            position: absolute;
            width: 173px;
            height: 36px;
            left: calc(50% - 173px/2 - 1.5px);
            top: 160px;
        }

        /* iPhone Pro Max */
        @media (max-width: 415px) {
            position: absolute;
            width: 87px;
            height: 18px;
            left: calc(50% - 87px/2 - 0.5px);
            top: 98px;

            font-size: 18px;
            line-height: 18px;
        }

    }

    #pancho {
        position: absolute;
        width: 346px;
        height: 81px;
        left: calc(50% - 346px/2 + 4px);
        top: 28px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 69px;
        line-height: 81px;

        background: -webkit-linear-gradient(60deg, #0FA3F7 13.56%, rgba(125, 31, 214, 0.864062) 55.06%, rgba(238, 88, 41, 0.96) 91.4%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 769px) {
            width: 346px;
            height: 81px;
            left: calc(50% - 346px/2 - 1px);
            top: 185px;

            font-size: 69px;
            line-height: 81px;
        }

        @media (max-width: 415px) {
            width: 176px;
            height: 41px;
            left: calc(50% - 176px/2);
            top: 112px;

            font-size: 35px;
            line-height: 41px;
        }
    }

    #fullstack {
        position: absolute;
        width: 346px;
        height: 36px;
        left: calc(50% - 356px/2 + 8px);
        top: 110px;

        font-family: VT323;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 36px;

        color: #26FA8E;

        @media (max-width: 769px) {
            left: calc(50% - 346px/2 - 1px);
            top: 275px;
        }

        @media (max-width: 415px) {
            width: 173px;
            height: 18px;
            left: calc(50% - 173px/2 - 0.5px);
            top: 160px;

            font-family: VT323;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 18px;
        }
    }
`;


export default Hero
