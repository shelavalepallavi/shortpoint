import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='h-32 sm:h-24 md:h-16 bg-purple-700  text-white  px-3 flex flex-col  md:flex-row justify-center md:justify-between items-center  md:items-center text-center'>
      <div className='logo font-bold text-2xl pb-2'>
      <Link href="/">ShortPoint</Link>
      </div>
      <ul className='flex flex-col  sm:flex-row  gap-2 sm:gap-4 items-center px-12 sm:ps-0'>
        <div className='flex gap-4 '>
        <Link href="/" className='text-sm sm:text-base'><li>Home</li></Link>
        <Link href="/about" className='text-sm sm:text-base'><li>About</li></Link>
        <Link href="/shorten" className='text-sm sm:text-base'><li>Shorten</li></Link>
        <Link href="/contact" className='text-sm sm:text-base'><li>Contact us</li></Link>
        </div>
        <li className='flex gap-3'>
          <Link href="/shorten" ><button className='bg-purple-500 p-1 rounded-lg shadow-lg px-3 font-bold text-sm sm:text-base'>Try Now</button></Link>
          <Link href="/github" target='_blank'><button className='bg-purple-500 p-1 text-sm sm:text-base rounded-lg shadow-lg px-3 font-bold'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
