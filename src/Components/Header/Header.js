import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ resetRover }) => {

  return (
    <div className='header'>
      <h1>Red Rover</h1>
      <Link to='/'>
        <button className='home' onClick={() => {resetRover()}}>Home</button>
      </Link>
    </div>
  )
}

export default Header

Header.propTypes = {
  resetRover: PropTypes.func
}
