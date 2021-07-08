import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import Hero from './components/Hero';
// import CallToAction from './components/CallToAction';
// import PortfolioProjects from './components/PortfolioProjects';
// import Stacks from './components/Stacks';

import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import SurgiWiki from './pages/SurgiWiki';
import AppShill from './pages/AppShill';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/surgiwiki" exact component={SurgiWiki}></Route>
        <Route path="/appshill" exact component={AppShill}></Route>

      </BrowserRouter>
    </div>
  )
}

export default App
