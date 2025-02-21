"use client"
import Link from 'next/link'
import React, { useState } from 'react'
Link

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

const generate =() =>{
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${window.location.origin}/${shorturl}`)
    setUrl("")
    setShorturl("")
    console.log(result)
  })
  .catch((error) => console.error(error));
}
  return (
    <div className='mx-auto max-w-lg min-h-screen bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4' >
      <h1 className='font-bold text-2xl'>Generate your short URLS</h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
         placeholder='Enter your URL' value={url} 
        onChange={e => {setUrl(e.target.value)}} className='px-4  py-2 rounded-md focus:outline-purple-600'/>

        <input type="text"
        placeholder='Enter your preferred short URL
        text' value={shorturl} onChange={e => {setShorturl(e.target.value)}} className='px-4  py-2 rounded-md focus:outline-purple-600'/>

        <button className='bg-purple-600 p-1 py-2 rounded-lg shadow-lg px-3 font-bold text-white my-3' onClick={generate}>Generarte</button>
      </div>
      {generated && <>
      <span className='font-bold text-lg'>Your Link</span> <code>
        <Link target="_blank" href={generated}>{generated}</Link>
        </code>
        </>
        }
    </div>
  )
}

export default Shorten
