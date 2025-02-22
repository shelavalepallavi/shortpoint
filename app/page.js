import Image from 'next/image';
import React from 'react';
import localFont from "next/font/local";
import Link from 'next/link';

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const page = () => {
  return (
    <main className='bg-purple-100 '>
      <section className='grid md:grid-cols-2 [grid-template-columns:repeat(2,1fr)_reversed] h-[92vh] md:h-[60vh] pt-4 md:pt-24'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className={` font-bold text-lg sm:text-2xl ${poppins.className}` }>The best URL shortner in the Market</p>
          <p className='px-28 text-center hidden sm:block'>We are the most straightforward URL shortener in the world. Most of the url shorteners will track you or ask youu to give your details for login. We understand your needs and hence we have created this URL shortener</p>
          <div className='flex gap-3 text-white'>
          <Link href="/shorten" className=''><button className=' bg-purple-500 p-1 rounded-lg shadow-lg px-3 font-bold'>Try Now</button></Link>
          <Link href="/github" target='_blank' ><button className='bg-purple-500 p-1 rounded-lg shadow-lg px-3 font-bold'>Github</button></Link>
        </div>
        </div>
        <div className='flex justify-start relative'>
          <Image src={'/vector.jpg'} alt='image of vector' fill={true} className='mix-blend-darken'/>
        </div>
      </section>
    </main>
  )
}

export default page
