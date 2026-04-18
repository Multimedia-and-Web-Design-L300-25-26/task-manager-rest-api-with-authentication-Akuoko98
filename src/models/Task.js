import mongoose from "mongoose";

// Create Task schema
// Fields
const taskSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true
  },
 description: {
    type: String
  },
 user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true });

export default mongoose.model("Task", taskSchema);