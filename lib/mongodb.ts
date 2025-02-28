import { MongoClient } from "mongodb"
import { cache } from "react"

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local")
}

const uri = process.env.MONGODB_URI
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
}

// In development, use a global variable to preserve the connection across HMR
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>
}

// Function to create a new client and connect
async function createClient() {
  const client = new MongoClient(uri, options)
  return client.connect()
}

// Cached function to get the client promise
export const getClientPromise = cache(async () => {
  if (process.env.NODE_ENV === "development") {
    if (!globalForMongo._mongoClientPromise) {
      globalForMongo._mongoClientPromise = createClient()
    }
    return globalForMongo._mongoClientPromise
  }
  return createClient()
})

// Helper function to get a connected client
export async function getConnectedClient() {
  try {
    const client = await getClientPromise()
    return client
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
    throw new Error("Failed to connect to database")
  }
}

export default getClientPromise

