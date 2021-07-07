import React from 'react';
import styled from 'styled-components';

const Stacks = () => {
    return (
        <div>
            <Container>
                <h1>Stacks</h1>
                <div id="front">
                    <h2>Front-End</h2>
                    <p>React, Redux</p>
                    <p>Figma</p>
                    <p>HTML | CSS | Javascript</p>
                    <p>Bootstrap</p>
                    <p>Wordpres</p>
                </div>
                <div id="backend">
                    <h2>Back-End</h2>
                    <p>Ruby</p>
                    <p>Ruby on Rails</p>
                    <p>SQL</p>
                    <p>API</p>
                    <p>Sinatra, Nokogiri</p>
                </div>
            </Container>
            <Nontechcontainer>
                <h1>Non Technical Experiences</h1>
                <div id="table">
                    <div id="work">
                        <h2>Pediatric Operating Room RN </h2>
                        <h2>US Army Reserves Nurse Corps</h2>
                        <h2>Emergency Room RN - level 1 trauma</h2>
                        <h2>Infusion RN - per diem</h2>
                        <h2>Inpatient Adult Psychiatric RN</h2>
                    </div>
                    <div id="years">
                        <p>5 years</p>
                        <p>4 years</p>
                        <p>1 year</p>
                        <p>2 years</p>
                        <p>2 years</p>
                    </div>
                </div>
                
            </Nontechcontainer>
            <Bottomspacer />
        </div>
    )
}

const Bottomspacer = styled.div`
    position: absolute;
    width: 611px;
    height: 211px;
    left: 429px;
    top: 2373px;
`;


const Nontechcontainer = styled.div`
    position: absolute;
    width: 672px;
    height: 342px;
    left: calc(50% - 672px/2 - 4px);
    top: 1978px;

    p {
        margin: 8px 0px;
    }

    h2 {
        margin: 2px 0px;
    }

    #table {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;

        position: absolute;
        width: 583px;
        height: 236px;
        left: calc(50% - 583px/2 - 1px);
        top: 103px;
    }

    #work {
        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: flex-start;
        padding: 0px;

        position: static;
        width: 505px;
        height: 235px;
        left: 0px;
        top: 0.5px;


        /* Inside Auto Layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 10px;


    }
    
    #years {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 0px;

        position: static;
        width: 68px;
        height: 236px;
        left: 515px;
        top: 0px;


        /* Inside Auto Layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 0px 10px;
    }
`;


const Container = styled.div`
    position: absolute;
    width: 605px;
    height: 264px;
    left: calc(50% - 605px/2 + 5.5px);
    top: 1600px;

    p {
        margin: 0px;
    }

    h2 {
        margin: 0px;
    }

    #front {
        position: absolute;
        width: 222px;
        height: 164px;
        left: 0px;
        top: 100px;
    };

    #backend {
        position: absolute;
        width: 222px;
        height: 164px;
        left: 427px;
        top: 100px;
    }
`;

export default Stacks
