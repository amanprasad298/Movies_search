import React from 'react'
import {useGlobalContext} from '../../Context/Context'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {

  const {movie, querry, setQuerry, error} = useGlobalContext()

  const sliceTitle = (title) => {
    const maxLength = 40;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };



  return (
    <div className='container d-flex flex-column align-items-center'>
        <h1 className='mt-5 mb-4'>Search Your Favorite Movies</h1>
        <form action='#' className="fs-6 w-75" onSubmit={(e)=> e.preventDefault()}>
          <input type="text" className="form-control text-center" placeholder='Enter Movie Title' value={querry} onChange={(e)=> setQuerry(e.target.value)}></input>
        </form>
        <p className='text-danger m-3'>{error.show && error.msg}</p>
        <div className='row m-5'>
        {movie && movie.length > 0 ? (
          movie.map((currentMovie) => {
            const { imdbID, Title, Poster } = currentMovie;
            return (
              <div className='col-md-4 py-3 d-flex justify-content-center' key={imdbID}>
                <NavLink to={`movie/${imdbID}`} className='card text-bg-dark' style={{ width: '22rem' }}>
                  <img src={Poster} className='card-img-top fixed-size-image' alt='...' />
                  <div className='card-body'>
                    <h6 className='card-title text-center'>{sliceTitle(Title)}</h6>
                  </div>
                </NavLink>
              </div>
            );
          })
        ) : (
          <p className='text-danger'>No movies to display.</p>
        )}
        </div>
    </div>
  )
}

export default Home
