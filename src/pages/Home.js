import React from 'react';
import Hero from '../components/Hero.js';
import CallToAction from '../components/CallToAction.js';
import PortfolioProjects from '../components/PortfolioProjects.js';
import Stacks from '../components/Stacks.js';

const Home = () => {
    return (
        <>
        <div>
            <Hero />
            <CallToAction />
            <PortfolioProjects />
            <Stacks />
        </div>
        </>
    )
}

export default Home
