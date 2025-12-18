import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
        <h2 className='text-2xl font-bold'>StitchIT</h2>
        <div className='flex gap-10  '>
        <Link className='flex gap-10 text-lg font-medium' to='/'>Home</Link>
        <Link className='flex gap-10 text-lg font-medium' to='/about'>About</Link>
        <Link className='flex gap-10 text-lg font-medium' to='/product'>Product</Link>
        <Link className='flex gap-10 text-lg font-medium' to='/measurment'>Measurment</Link>
        </div>
    </div>
  )
}

export default Navbar