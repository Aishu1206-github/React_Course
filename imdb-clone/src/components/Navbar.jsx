import React from 'react'
import Logo from '../movie.jpg'
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center px-3 py-3 font-serif'>
      <img className='w-[100px] hover:scale-110 transition-transform duration-300' src={Logo} alt="" />
          <h1 className='text-2xl font-bold tracking-wide '> MoviewFlix</h1>

      <div className='flex space-x-7 text-lg'>
      <a href="/" className='text-purple-700 transition-colors duration-300 text-xl font-bold'>Home</a>
      <a href="/watchlist" className='text-purple-700 transition-colors duration-300 text-xl font-bold'>Watchlist</a>
      </div>
    </div>
  )
}

export default Navbar