import React, { useState } from 'react';
import './App.css';
import Rovers from '../Rovers/Rovers';
import fetchData from '../../apiCalls';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import RoverDisplay from '../RoverDisplay/RoverDisplay';
import ErrorPage from '../Error/ErrorPage';

const App = () => {
 const [rover, setRover] = useState([])
 const [error, setError] = useState('')
 const [redirect, setRedirect] = useState(false)

 const fetchRoverData = (roverName, earthDate) => {
   fetchData.getData(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${earthDate}&api_key=ZwJF4eMjMCusSw5v7ISSzrh4nPPv91b4uoCx6rgq`)
     .then(data => setRover(data.photos))
     .catch((error) => {
       setError(error)
    })
 }

 const applyRedirect = () => {
   setRedirect(true)
 }

 const resetErrorDisplay = () => {
   setError('')
 }

 const resetRover = () => {
   resetErrorDisplay()
   setRover([])
 }

 const deleteImage = (id) => {
   const filteredImages = rover.filter(image => image.id !== id);
   setRover(filteredImages)
 }

 return (
   <div className='app'>
   { rover.length > 0 ? <Redirect to='/images' /> : '' }
   <Switch>
    <Route exact path='/' >
      <Header resetRover={resetRover} />
      <Rovers errorDisplay={error} roverPhotoData={rover} fetchRoverData={fetchRoverData} />
    </Route>
    <Route exact path='/images'>
      <Header resetRover={resetRover} />
      <RoverDisplay deleteImage={deleteImage} roverPhotoData={rover} />
    </Route>
    <Route>
      <Redirect to='/error' />
      <ErrorPage />
    </Route>
   </Switch>
   </div>
 )
}

export default App;
