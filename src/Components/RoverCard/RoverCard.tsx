import React from 'react';
import './RoverCard.css'
import { RoverCardProps as RoverCardProps } from '../../utilities/utilities';

const RoverCard = ({ camera, img_src, id, deleteImage }: RoverCardProps) => {

  return (
    <div className='card' onClick={() => {deleteImage(id)}}>
      <img className='rover-card' src={img_src} height='240px' width='240px'/>
      <div className='hover-text'>
        <p className='camera'>{camera.full_name}</p>
        <p className='remove-img'>click to remove</p>
      </div>
    </div>
  )
}

export default RoverCard;
