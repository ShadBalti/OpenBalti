import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable")
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * It implements a caching mechanism to reuse existing connections, which is crucial for performance in serverless environments.
 * During development, it leverages a global cache to persist connections across hot reloads.
 *
 * @returns {Promise<typeof mongoose>} A promise that resolves to the Mongoose connection instance.
 * @throws {Error} If the `MONGODB_URI` environment variable is not set or if the connection fails.
 */
async function dbConnect() {
  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection")
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10, // Optimize connection pool size
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    }

    console.log("🔄 Connecting to MongoDB...")

    cached.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        console.log("✅ MongoDB connected successfully!")
        return mongoose
      })
      .catch((error) => {
        console.error("❌ MongoDB connection error:", error)
        throw error
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

// Add an event listener for connection errors
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err)
})

// Add an event listener for when the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected")
})

// Add an event listener for when the connection is reconnected
mongoose.connection.on("reconnected", () => {
  console.log("✅ MongoDB reconnected")
})

// Handle process termination
process.on("SIGINT", async () => {
  await mongoose.connection.close()
  console.log("MongoDB connection closed due to app termination")
  process.exit(0)
})

export default dbConnect
