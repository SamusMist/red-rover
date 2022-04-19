import React from 'react';

const Rovers = ({ fetchRoverData }) => {
  return (
    <div className='button-container'>
          <button className='curiosity'
          value={'curiosity'}
          onClick={() => fetchRoverData('curiosity', '2022-3-22')}>curiosity</button>
    </div>
  )
}

export default Rovers
