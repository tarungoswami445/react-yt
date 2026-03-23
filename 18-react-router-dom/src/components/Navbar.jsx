import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
       <div className="flex justify-around justify-center justify-between justify-center px-20 py-20 bg-pink-100 gap-5">
        <div className="flex justify-between justify-center  ">
          <h3>Shreyiansh</h3>
        </div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
  
  )
}

export default Navbar
