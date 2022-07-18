import React, { useState } from 'react';
import './App.css';
import Rovers from '../Rovers/Rovers';
import fetchData from '../../apiCalls';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import RoverDisplay from '../RoverDisplay/RoverDisplay';
import ErrorPage from '../Error/ErrorPage';
import { RoverFetch as RoverFetch } from '../../utilities/utilities';
import { RoverDataType as RoverDataType } from '../../utilities/utilities';

const App = () => {
 const [rover, setRover] = useState<RoverDataType[]>([]);
 const [error, setError] = useState<string>('');
 const [redirect, setRedirect] = useState<boolean>(false);

 const fetchRoverData: RoverFetch = (roverName, earthDate) => {
   fetchData.getData(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${earthDate}&api_key=ZwJF4eMjMCusSw5v7ISSzrh4nPPv91b4uoCx6rgq`)
     .then(data => setRover(data.photos))
     .catch((error) => {
       setError(error)
       console.log(rover)
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

 const deleteImage = (id: number): void => {
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
      <Header resetRover={resetRover} />
      <ErrorPage />
    </Route>
    
   </Switch>
   </div>
 )
}

export default App;
