import React from 'react'
import './Error.css'
import { ErrorProps as ErrorProps } from '../../utilities/utilities'

const Error = ({ errorDisplay, errorMsg }: ErrorProps) => {

  return (
    errorDisplay ? <p className='error-display' >{`${errorDisplay}`}</p> : <p className='error-message' >{`${errorMsg}`}</p>
  )
}

export default Error;
