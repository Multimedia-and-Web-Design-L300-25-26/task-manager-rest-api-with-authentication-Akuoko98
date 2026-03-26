import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Cnnect to MONGODB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});