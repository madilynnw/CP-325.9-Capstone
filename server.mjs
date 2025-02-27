// Imports
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.mjs"; // Assuming you have a database connection function in the config folder
import musicRoutes from "./routes/musicroutes.mjs"; // Updated to match the correct file path

// Setup
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000; // Port updated to match previous example (5000)

// DB Connection
connectDB();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api/music", musicRoutes); // Changed to match the route prefix "/api/music"

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
