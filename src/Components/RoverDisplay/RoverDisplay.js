import React from 'react';
import RoverCard from '../RoverCard/RoverCard';
import './RoverDisplay.css'

const RoverDisplay = ({ roverPhotoData }) => {

  const allRoverData = roverPhotoData.map(data => {
    return (
      <div className='data-display' key={data.id}>
        <RoverCard {...data} />
      </div>
    )
  })

  return (
    <div className='data-container'>
      {allRoverData}
    </div>
  )
}

export default RoverDisplay;
