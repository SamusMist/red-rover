import React, { useState } from 'react';
import './App.css';
import Rovers from '../Rovers/Rovers';
import fetchData from '../../apiCalls';

const App = () => {
 const [rover, setRover] = useState([])

 const fetchRoverData = (roverName, earthDate) => {
   fetchData.getData(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${earthDate}&api_key=ZwJF4eMjMCusSw5v7ISSzrh4nPPv91b4uoCx6rgq`)
     .then(data => setRover(data.photos))
     console.log(rover)
 }

 return (
   <div className='App'>
   <Rovers fetchRoverData={fetchRoverData} roverPhotoData={rover} />
   </div>
 )
}

export default App;
