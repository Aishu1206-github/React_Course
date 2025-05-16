import React from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Movies() {

  const[movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6e4cf9869384a8c164b6e0279aa877a&language=en-US&page=1`).then(function(res) {
      setMovies(res.data.results)
    })
  },[])

  return (
    <div className='p-5'>
        <div className='text-2xl m-6 font-bold text-center '>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-5'>
           {movies.map((moviesObj)=>{
              return <MovieCard poster_path={moviesObj.poster_path} name={moviesObj.original_title}/>
           })}
        
        </div>

    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=b6e4cf9869384a8c164b6e0279aa877a&language=en-US&page=1