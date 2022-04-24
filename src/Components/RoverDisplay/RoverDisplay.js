import React from 'react';
import RoverCard from '../RoverCard/RoverCard';
import './RoverDisplay.css'

const RoverDisplay = ({ roverPhotoData, deleteImage }) => {
  let roverName = ''
  let status = ''
  let sol = ''

  const allRoverData = roverPhotoData.map(data => {
    roverName = data.rover.name;
    status = data.rover.status;
    sol = data.sol;
    return (
      <div className='data-display' key={data.id}>
        <RoverCard deleteImage={deleteImage} {...data} />
      </div>

    )
  })

  return (
    <div className='image-display'>
      <div className='image-info'>
        <h1>{roverName}</h1>
        <p className='info'>Status: {status}</p>
        <p className='info'>Sol: {sol}</p>
      </div>
      <div className='data-container'>
        {allRoverData}
      </div>
    </div>
  )
}

export default RoverDisplay;
