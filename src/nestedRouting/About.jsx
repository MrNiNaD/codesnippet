import React from 'react';
import { Link } from 'react-router-dom';

function About({ match }) {
  return (
    <div>
      {console.log(`${match.url}/home2`)}
      About
      <Link to="/">Home</Link>
    </div>
  )
}

export default About
