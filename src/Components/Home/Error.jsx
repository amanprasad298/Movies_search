import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center' style={{height:'100svh'}}>
        <h1>404 Page Not Found!!</h1>
        <Link to='/' className='btn btn-primary py-2 px-5 m-4'>Go Back</Link>
    </div>
  )
}

export default Error