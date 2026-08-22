const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoute = require("./routes/contact");

const app = express();

const PORT = process.env.PORT || 5000;

// ================= MIDDLEWARE =================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// ================= ROUTES =================

app.use("/api/contact", contactRoute);

// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

// ================= MONGODB =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });