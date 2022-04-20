import React from 'react';
import './RoverCard.css'

const RoverCard = ({ camera, img_src, rover }) => {

  return (
    <div className='card'>
      <img src={img_src} height='250px' width='250px'/>
      <p>{rover.name}</p>
      <p>{rover.status}</p>
      <p>{camera.full_name}</p>
    </div>
  )
}

export default RoverCard;
