// lib/mongodb.js

// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = { 
//   useNewUrlParser: true,
// }

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') { 
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// export default clientPromise

import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("shortpoints")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists!' })
    }

    // Insert the new URL
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'URL Generated successfully' })
  } catch (error) {
    console.error('Error in POST /api/generate:', error)  // Log the error
    return Response.json({ success: false, error: true, message: 'An error occurred, please try again later.' })
  }
}
