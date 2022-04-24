import React from 'react'
import './Error.css'
import PropTypes from 'prop-types';

const Error = ({ errorDisplay, errorMsg }) => {

  return (
    errorDisplay ? <p className='error-display' >{`${errorDisplay}`}</p> : <p className='error-message' >{`${errorMsg}`}</p>
  )
}

export default Error;

Error.propTypes = {
  errorDisplay: PropTypes.string,
  errorMsg: PropTypes.string
}
