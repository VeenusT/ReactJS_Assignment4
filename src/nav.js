import React from 'react';
import {Link} from 'react-router-dom';
function nav() {
  return (
    <nav>
      <ul>
      <Link to='/'>
      <h1>
      <p align="right"><li>Home</li></p>
    </h1>
        </Link>
      </ul>
    </nav>
  )
}
export default nav;
