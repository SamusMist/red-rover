import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { HeaderProps as HeaderProps} from '../../utilities/utilities';

const Header = ({ resetRover }: HeaderProps) => {

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
