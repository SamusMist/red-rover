import React, { useState } from 'react';
import RoverDisplay from '../RoverDisplay/RoverDisplay';
import { Route, Link } from 'react-router-dom';
import './Rovers.css';
import Error from '../Error/Error';

const Rovers = ({ fetchRoverData, errorDisplay }) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [errorState, setErrorState] = useState(false)
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
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
    if(fetchRoverData.length === 0)
    setErrorState(true)
    setTimeout(() => {
      setErrorMsg('Rover is either charging or out of commission. Please select another date within the Rovers lifecycle')
    }, 500)
  }

  return (
    <div className='rovers'>
    <form className='form'>
      <div className='rover-selector'>
        <label htmlFor='curiosity' className='curiosity'>
          <input type='radio' id='curiosity' type='radio' value={'curiosity'} checked={ checkedRadio.curiosity } onChange={ changeRadio }/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/260px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg' height='300px' width='300px'/>
          Curiosity
          <p className='lifecycle'>Lifecycle:</p>
          <p className='lifecycle-date'>10-05-2012 . present</p>
        </label>
        <label htmlFor='perseverance' className='perseverance'>
        <input id='perseverance' type='radio' value={'perseverance'} checked={ checkedRadio.perseverance } onChange={ changeRadio }/>
        <img src='https://mars.nasa.gov/layout/mars2020/images/home/MarsPerseveranceRover_SampleCollection.jpg' height='300px' width='300px'/>
        Perseverance
        <p className='lifecycle'>Lifecycle:</p>
        <p className='lifecycle-date'>02-18-2021 . present</p>
        </label>
        <label htmlFor='opportunity' className='opportunity'>
          <input id='opportunity' type='radio' value={'opportunity'} checked={ checkedRadio.opportunity } onChange={ changeRadio }/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg' height='300px' width='300px'/>
          Opportunity
          <p className='lifecycle'>Lifecycle:</p>
          <p className='lifecycle-date'>01-24-2004 . 06-12-2018</p>
        </label>
        <label htmlFor='spirit' className='spirit'>
          <input id='spirit' type='radio' value={'spirit'} checked={ checkedRadio.spirit } onChange={ changeRadio }/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Mars_Spirit.jpg' height='300px' width='300px'/>
          Spirit
          <p className='lifecycle'>Lifecycle:</p>
          <p className='lifecycle-date'>01-03-2004 . 01-27-2010</p>
        </label>
      </div>
      {errorState !== '' ? <Error errorMsg={errorMsg} errorDisplay={errorDisplay} /> : ''  }
      <div className='date-submit'>
        <p>Select a date within the rovers lifecycle</p>
        <input
          className='select-date'
          type='date'
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={(e) => {displayRoverImages(e)}}>Enter</button>
        </div>
    </form>
    </div>
  )
}

export default Rovers
