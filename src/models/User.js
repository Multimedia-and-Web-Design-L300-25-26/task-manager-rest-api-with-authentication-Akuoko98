import mongoose from "mongoose";

// Create user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
 },
  password: {
    type: String,
    required: true
 }
}, { timestamps: true}); 

export default mongoose.model("User", userSchema);