import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-5 '>
        <Link className='text-2xl font-semibold' to='/product/men'>Men</Link>
        <Link className='text-2xl font-semibold' to='/product/women'>Women</Link>
       <Link className='text-2xl font-semibold' to='/product/kids'>Kids</Link>

      </div>
       
         <Outlet/>
     </div>
  )
}

export default product
