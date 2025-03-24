const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");

const dbConfig = require("./config/db");
const auth = require("./middleware/auth");

const app = express();

// Example of a protected route using auth middleware
app.get("/protected", auth, (req, res) => {
  res.json({ msg: "This is a protected route", user: req.user });
});

// Allowed origins for CORS
const allowedOrigins = ["http://localhost:3000"];
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(dbConfig.mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// module.exports = app;

// module.exports = app;