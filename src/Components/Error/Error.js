import React from 'react'
import './Error.css'

const Error = ({ errorDisplay, errorMsg }) => {
  return (
    errorDisplay ? <p className='error-display' >{`${errorDisplay}`}</p> : <p className='error-message' >{`${errorMsg}`}</p> 
  )
}

export default Error;
