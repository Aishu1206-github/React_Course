import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div className='h-[40vh] w-[230px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex-col justify-between items-end' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

                {/* Emoji with html element  */}
      <div className='flex justify-end items-end p-2'>
      <div  className='h-8 w-8 flex items-center justify-center bg-gray-900/60 rounded-lg text-white text-lg'>
        &#128525;
      </div>
      </div>
      
            {/* movie title */}
      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/70 rounded-b-xl'>
        {name}
      </div>
    </div>
    
  )
}

export default MovieCard