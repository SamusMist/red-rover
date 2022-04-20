import React from 'react';

const RoverDisplay = ({ fetchRoverData }) => {

  const allRoverData = fetchRoverData.map(data => {
    return (
      <div className='data-display' key={data.id}>
        <RoverCard {...data} />
      </div>
    )
  })

  return(
    <div className='data-container'>
      {allRoverData}
    </div>
  )

}

export default RoverDisplay
