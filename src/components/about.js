import React from 'react';
import { Link } from 'react-router';

const About = (props) => {
  return (
    <div>
      <h2 className="text-center">About Page</h2>
      <ol>
        <li>
          <Link to='/?location=Dallas'>Dallas</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

export default About;
