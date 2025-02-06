import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='h-24 sm:h-16 bg-purple-700  text-white  px-3   sm:flex sm:justify-between sm:items-center text-center'>
      <div className='logo font-bold text-2xl pb-2'>
      <Link href="/">ShortPoint</Link>
      </div>
      <ul className='flex gap-4 items-center px-12 sm:ps-0'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten" ><button className='bg-purple-500 p-1 rounded-lg shadow-lg px-3 font-bold'>Try Now</button></Link>
          <Link href="/github" target='_blank'><button className='bg-purple-500 p-1 rounded-lg shadow-lg px-3 font-bold'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
