import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const SurgiWiki = () => {
    return (
        <div>
            <Nav />
            <Container>
                <h1>Surgi.Wiki</h1>
                <button id="site">Live Website</button>
                <button id="github">Github Repo</button>
            </Container>
            <Descriptions>
                <h2>Description</h2>
                <p>SurgiWiki is an open-content collaborative database. A simple 
                    content and photo management system. This Minimum Viable 
                    Product is designed for nurses and surgical techs to 
                    organize, answer, and search their most frequently asked 
                    questions.
                </p>
                <p>Users can upload photos, create memos and inventories. The entire 
                    database of library is searchable. 3rd party login available
                     via Twitter.
                </p>
                <h2>Stacks</h2>
                <p>Ruby on Rails, SQL, Bootstrap, CSS, HTML, OAuth gem, Amazon Web Services</p>
                <h2>Specs</h2>
                <ul>
                    <li>Include signup</li>
                    <li>Include login</li>
                    <li>Include logout</li>
                    <li>Include at least one has_many relationship (x has_many y; e.g. User has_many Recipes)</li>
                    <li>Include at least one many-to-many relationship (x has_many y through z, y has_many x through z; e.g. Recipe has_many Items through Ingredients, Item has_many Recipes through Ingredients)</li>
                    <li>The "through" part of the has_many through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user (attribute_name e.g. ingredients.quantity)</li>
                    <li>Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)</li>
                    <li>Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)</li>
                    <li>Include third party signup/login (how e.g. Devise/OmniAuth)</li>
                    <li>Include nested resource show or index (URL e.g. users/2/recipes)</li>
                    <li>Include nested resource "new" form (URL e.g. recipes/1/ingredients/new)</li>
                    <li>Include form display of validation errors (form URL e.g. /recipes/new)</li>
                </ul>
                <h2>Video Walkthrough</h2>
                <iframe width="954" height="537" src="https://www.youtube.com/embed/MkMiXls_E7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
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
        width: 166px;
        height: 42px;
        left: calc(50% - 166px/2);
        top: 99px;
    }
`;

export default SurgiWiki
