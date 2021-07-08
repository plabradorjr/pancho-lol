import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const AppShill = () => {
    return (
        <div>
            <Nav />
            <Container>
                <h1>App.Shill.Lol</h1>
                <button id="site">Live Website</button>
                <button id="github">Github Repo</button>
            </Container>
            <Descriptions>
                <h2>Description</h2>
                <p>Allows data visualization of stocks and cryptocurrencies. 
                    Users can submit comments, view trending coins, and 
                    search all coins supported by coingecko.com. 3rd party login available via Twitter.
                </p>
               
                <h2>Stacks</h2>
                <p>Front-end: React, Redux, Coingecko API</p>
                <p>Backend: Ruby on Rails</p>
                <h2>Specs</h2>
                <ul>
                    <li>Include signup</li>
                    <li>Include login</li>
                    <li>Include logout</li>
                    <li>5+ stateless components</li>
                    <li>2+ container componests</li>
                    <li>3+ routes</li>
                    <li>Use `react-router` and proper RESTful routing</li>
                    <li>Use Redux middleware to respond to and modify state change</li>
                    <li>Use async actions and redux-thunk middleware to send data to and receive data from a server</li>
                </ul>
                <h2>Video Walkthrough</h2>
                <iframe width="954" height="537" src="https://www.youtube.com/embed/B1-YHROsui8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
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
        left: calc(50% - 163px/2 + 91.5px);
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
        width: 230px;
        height: 42px;
        left: calc(50% - 235px/2);
        top: 99px;
    }
`;

export default AppShill
