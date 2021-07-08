import React, {useEffect} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Cli = () => {
    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <div>
            <Nav />
            <Container>
                <h1>Command Line Interface</h1>
                <button id="github">Github Repo</button>
            </Container>
            <Descriptions>
                <h2>Description</h2>
                <p>This is a command line interface (CLI) that scrapes 
                    coinmarketcap.com to show you the current top ranking 
                    cryptocurrencies based on market capitalization.
                </p>
               
                <h2>Language</h2>
                <p>Ruby</p>
                
                <h2>Video Walkthrough</h2>
                <iframe width="954" height="537" src="https://www.youtube.com/embed/jGt6ev5CRK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            <Footer />

            </Descriptions>
        </div>
    )
}

const Descriptions = styled.div`
    position: absolute;
    width: 954px;
    /* height: 540px; */
    left: calc(50% - 954px/2);
    top: 400px;

    p {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #bdc3c7;
    }



`;

const Container = styled.div`
    /* position: absolute; */
    height: 375px;
    left: 0%;
    /* right: 0%;
    top: 78px; */

    background: #2F3640;

    #site {
        position: absolute;
        width: 163px;
        height: 64px;
        left: calc(50% - 163px/2 - 91.5px);
        top: 179px;
    }

    #github {
        position: absolute;
        width: 163px;
        height: 64px;
        left: calc(50% - 350px/2 + 91.5px);
        top: 179px;

        background: #242526;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
    }

    button {
        width: 163px;
        height: 64px;
        top: 179px;

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
    }

    h1 {
        position: absolute;
        width: 430px;
        height: 42px;
        left: calc(50% - 430px/2);
        top: 99px;
    }
`;

export default Cli
