import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Movie = () => {

    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState("")

    const getMovies = async(url) =>{
        setIsLoading(true)
        try {
            const res = await fetch (url)
            const data = await res.json();
            console.log(data)
            if (data.Response === 'True'){
                setIsLoading(false)
                setMovie(data)
            }
        } catch (error) {
            alert('error')
        }
    }

    useEffect(()=>{
        let timeout = setTimeout(()=>{getMovies(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)},800)
                                
        return ()=> clearTimeout(timeout)
    }, [id])

    if(isLoading) {
        return(
            <div className='container d-flex justify-content-center align-items-center' style={{height:'100svh'}}>
                <div className="text-center text-secondary fs-1">Loading...</div>
            </div>
        )
    }

  return (
    <div className='container d-flex justify-content-center flex-column align-items-csenter' style={{height:'100svh'}}>
        <div className="card text-bg-dark mb-3" style={{maxWidth: ''}}>
            <div className="row g-0">
                <div className="col-md-3">
                <img src={movie.Poster} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-9">
                <div className="card-body">
                    <h3 className="card-title mb-4">{movie.Title}</h3>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Cast: </span>{movie.Actors}</p>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Released on:</span> {movie.Released}</p>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Director:</span> {movie.Director}</p>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Language:</span> {movie.Language}</p>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Country:</span> {movie.Country}</p>
                    {/* <p className="card-text text-secondary my-2"><span className='text-white'>Plot:</span> {movie.Plot}</p> */}
                    <p className="card-text text-secondary my-2"><span className='text-white'>Rated:</span> {movie.Rated}</p>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Run Time:</span> {movie.Runtime}</p>
                    <p className="card-text text-secondary my-2"><span className='text-white'>Genre:</span> {movie.Genre}</p>
                    {/* <p className="card-text text-secondary my-2"><span className='text-white'>Rotten Tomatoes:</span> {movie.Ratings[1].Value}</p> */}
                    <p className="card-text text-secondary my-2"><span className='text-white'>IMDb:</span> {movie.imdbRating}/10</p>
                    {/* <p className="card-text text-secondary my-2"><span className='text-white'>Metacritic:</span> {movie.Ratings[2].Value}</p>         */}
                </div>
                </div>
            </div>
        </div>
        <Link to='/' className='btn btn-outline-primary'>Go Back</Link>
    </div>
  )
}

export default Movie