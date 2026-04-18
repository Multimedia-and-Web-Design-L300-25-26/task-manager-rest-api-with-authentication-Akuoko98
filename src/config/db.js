import mongoose from "mongoose";

const connectDB = async () => {
  // If already connected, dont try to connect again
  if (mongoose.connection.readyState >= 1) return;

  try {
    await
     mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    // In a test environment, we want to fail fast
    process.exit(1);
  }
};

export default connectDB;