import React, {useEffect} from 'react';
import Hero from '../components/Hero.js';
import CallToAction from '../components/CallToAction.js';
import PortfolioProjects from '../components/PortfolioProjects.js';
import Stacks from '../components/Stacks.js';

const Home = () => {
    useEffect(() => {window.scrollTo(0, 0);})

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
