import React, {useEffect} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Shill = () => {
    useEffect(() => {window.scrollTo(0, 0);})

    return (
        <div>
            <Nav />
            <Container>
                <h1>Shill.Lol</h1>
                <button id="site">Live Website</button>
            </Container>
            <Descriptions>
                <h2>Description</h2>
                <p>Fully functional e-commerce store. Users can purchase 
                    t-shirts and fulfillments are automated.
                </p>
               
                <h2>Stacks</h2>
                <p>Wordpress, Stripe, CoinBase, WooCommerce</p>
                <h2>Notable customer</h2>
                <p>CTO of sushi.com</p>
                <iframe width="954" height="537" src="https://www.youtube.com/embed/DWwt_UWkzq4" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>

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
        left: calc(50% - 10px/2 - 91.5px);
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
        left: calc(50% - 265px/2);
        top: 99px;
    }
`;

export default Shill
