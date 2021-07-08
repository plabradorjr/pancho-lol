import React from 'react';
import styled from 'styled-components';
import surgi_img from '../assets/xsurgi.jpg';
import stock from '../assets/xstocks.jpg';
import store from '../assets/xstore.jpg'
import cli from '../assets/xcli.jpg'
import { Link } from 'react-router-dom';

const PortfolioProjects = () => {
    return (
        <Container>
            <h2 id="heading">Portfolio Projects</h2>
            <div id="frame-4-folios">
                <div className="apps">
                    <img src={surgi_img} alt="surgery"></img>
                    <h2>Surgi.Wiki</h2>
                    <p>Open-content collaborative</p>
                    <p>database for nurses</p>
                    <Link to="/surgiwiki">
                    <button id="btn-sw">More Info</button>
                    </Link>
                </div>
                <div className="apps">
                    <img src={stock} alt="surgery"></img>
                    <h2>App.Shill.lol</h2>
                    <p>Cryptocurrencies and stocks</p>
                    <p>data visualization pages</p>
                    <Link to="/appshill">
                    <button id="btn-sw">More Info</button>
                    </Link>
                </div>
                <div className="apps">
                    <img src={store} alt="surgery"></img>
                    <h2>Shill.lol</h2>
                    <p>Fully functional e-commerce</p>
                    <p>store</p>
                    <Link to="/shill-lol">
                    <button id="btn-sw">More Info</button>
                    </Link>
                </div>
                <div className="apps">
                    <img src={cli} alt="surgery"></img>
                    <h2>Command Line Interface</h2>
                    <p>Scraper of coinmarketcap.com</p>
                    <p>for current crypto prices </p>
                    <Link to="/cli">
                    <button id="btn-sw">More Info</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    //main frame
    position: absolute;
    width: 1300px;
    height: 733px;
    left: calc(50% - 1300px/2);
    top: 771px;

    font-family: VT323;
    font-style: normal;
    font-weight: normal;
    
    img {
        border-radius: 10px;
    }
    
    h2 {
    margin: 0px;
    }

    p {
    height: 0px;
    margin-top: 0px;

    }

    #heading {
        position: absolute;
        width: 286px;
        height: 42px;
        left: calc(50% - 286px/2);
        top: 0px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;

        background: -webkit-linear-gradient(60deg, #0FA3F7 13.56%, rgba(125, 31, 214, 0.864062) 55.06%, rgba(238, 88, 41, 0.96) 91.4%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 415px) {
        width: 143px;
        height: 21px;
        left: calc(50% - 143px/2 + 0.5px);
        top: 450px;

        font-size: 18px;
        line-height: 21px;
        }
    }

    #frame-4-folios {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;

        position: absolute;
        width: 1300px;
        height: 509px;
        left: calc(50% - 1300px/2);
        top: 141px;
    }

    .apps {
        position: static;
        /* Inside Auto Layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 7px;
    }

    #btn-sw {
        margin-top: 10px;
        position: absolute;
        width: 310px;
        height: 64px;
        /* left: calc(50% - 310px/2); */

        background: #242526;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;

        font-size: 24px;
        line-height: 24px;
        color: #bdc3c7;
    }
`;

export default PortfolioProjects
