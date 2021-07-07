import React from 'react';
// import { Container, Row } from 'react-bootstrap';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import PortfolioProjects from './components/PortfolioProjects';
import Stacks from './components/Stacks';

const App = () => {
  return (
    <div>
        <Hero />
        <CallToAction />
        <PortfolioProjects />
        <Stacks />
    </div>
  )
}

export default App
