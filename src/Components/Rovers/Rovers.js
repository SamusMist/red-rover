import React, { useState } from 'react';
import RoverDisplay from '../RoverDisplay/RoverDisplay'
import { Route, Link } from 'react-router-dom';

const Rovers = ({ fetchRoverData }) => {
  const [selectedRover, setSelectedRover] = useState(null)
  const [date, setDate] = useState(null)
  const [checkedRadio, setCheckedRadio] = useState({
    perseverance: false,
    spirit: false,
    curiosity: false,
    opportunity: false
  });

  const changeRadio = (e) => {
    setCheckedRadio(() => {
      return {
        perseverance: false,
        spirit: false,
        curiosity: false,
        opportunity: false,
        [e.target.value]: true
      }
    })
    setSelectedRover(e.target.value)
  }

  const displayRoverImages = (e) => {
    e.preventDefault()
    fetchRoverData(selectedRover, date)
    clearForm()
  }

  const clearForm = () => {
    setDate(null)
  }

  return (
    <div className='rovers'>
    <form
      className='rover-selector'>
      <input
        id='curiosity'
        type='radio'
        className='curiosity'
        value={'curiosity'}
        checked={ checkedRadio.curiosity }
        onChange={ changeRadio }
      />
      <label htmlFor='curiosity'>Curiosity</label>
      <input
        id='perseverance'
        type='radio'
        className='perseverance'
        value={'perseverance'}
        checked={ checkedRadio.perseverance }
        onChange={ changeRadio }
      />
      <label htmlFor='perseverance'>Perseverance</label>
      <input
        id='opportunity'
        type='radio'
        className='opportunity'
        value={'opportunity'}
        checked={ checkedRadio.opportunity }
        onChange={ changeRadio }
      />
      <label htmlFor='opportunity'>Opportunity</label>
      <input
        id='spirit'
        type='radio'
        className='spirit'
        value={'spirit'}
        checked={ checkedRadio.spirit }
        onChange={ changeRadio }
      />
      <label htmlFor='spirit'>Spirit</label>
      <input
        className='select-date'
        type='date'
        onChange={(e) => setDate(e.target.value)}
      />
        <button onClick={(e) => {displayRoverImages(e)}}>Submit</button>
    </form>
    </div>
  )
}

export default Rovers
