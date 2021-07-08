import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import Hero from './components/Hero';
// import CallToAction from './components/CallToAction';
// import PortfolioProjects from './components/PortfolioProjects';
// import Stacks from './components/Stacks';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import SurgiWiki from './pages/SurgiWiki';
import AppShill from './pages/AppShill';
import Shill from './pages/Shill';
import Cli from './pages/Cli';


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/surgiwiki" exact component={SurgiWiki}></Route>
        <Route path="/appshill" exact component={AppShill}></Route>
        <Route path="/shill-lol" exact component={Shill}></Route>
        <Route path="/cli" exact component={Cli}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
