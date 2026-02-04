const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

// Enable CORS for frontend (Vite default port 5173)
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// MongoDB connection
const mongoURI = "mongodb://127.0.0.1:27017/travel-agency";

mongoose
  .connect(mongoURI)
  .then(() => console.log("🍃 MongoDB Connected!"))
  .catch((err) => console.log("❌ Connection Error:", err));

// ✅ CREATE SCHEMA (match Compass fields)
const packageSchema = new mongoose.Schema({
  id: String,
  packageName: String,
  desc: String,
  itinerary: String,
  img: String,
  price: String,
});

// ✅ CREATE MODEL (maps to "packages" collection)
const packages = mongoose.model("packages", packageSchema);

// Test route
app.get("/", async (req, res) => {
  res.send("Server is up and running!");
  try {
    const data = await packages.find().limit(6); // ✅ USE MODEL
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching data",
      error: err.message,
    });
  }
});

// ✅ FIXED ROUTE
app.get("/packages", async (req, res) => {
  try {
    const data = await packages.find(); // ✅ USE MODEL
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching data",
      error: err.message,
    });
  }
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`✅ server is running : http://localhost:${port}`);
});
