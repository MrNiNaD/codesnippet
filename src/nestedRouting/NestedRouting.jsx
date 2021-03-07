import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function NestedRouting() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default NestedRouting
