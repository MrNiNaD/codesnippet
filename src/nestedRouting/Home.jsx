import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home1 from './Home1';
import Home2 from './Home2';

function Home({ match }) {
  return (
    <div>
      {console.log(`${match.url}home2`)}
      Home
      <Link to="/about">About</Link>
      <div>
        <Link to={`${match.path}`}>Home1</Link>
        <Link to={`${match.path}home2`}>Home2</Link>
      </div>
      <Switch>
        <Route path={`${match.path}`} component={Home1} exact />
        <Route path={`${match.path}home2`} component={Home2} />
      </Switch>
      
    </div>
  )
}

export default Home
