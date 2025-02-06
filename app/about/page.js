import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

const page = () => {
  console.log("Base URL:", process.env.NEXT_PUBLIC_HOST);

  return (
    <>
    <Head>
      <title>About | Shorten URL</title>
      <meta name="description" content="Learn more about our URL shortening service." />
    </Head>
    <div className="h-[91vh] flex items-center justify-center bg-purple-50">
      <div className="max-w-2xl h-auto bg-purple-100 p-6 rounded-lg shadow-lg text-center">
        <div className='relative w-full h-72'>
        <Image
          src={'/about.jpg'}
          alt="Shorten URL Illustration"
          fill={true}
          className="mx-auto rounded-lg mix-blend-darken"
        />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Shorten URLs with ease</h1>
        <p className="text-gray-600 mt-2">
          Convert long links into short, shareable URLs in one click.  
          Fast, simple, and reliable.
        </p>
      </div>
    </div>
  </>
  )
}

export default page
