import React from 'react';
import { Link } from 'react-router';

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About Page</h1>
      <ol>
        <li>
          <Link to='/?location=Dallas'>Dallas</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
        <li>
          <a href="https://www.google.com" >Google</a>
        </li>
      </ol>
    </div>
  );
}

export default About;
