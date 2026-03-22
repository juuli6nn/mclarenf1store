// Import required packages
const express = require("express");
const cors = require("cors");

// Import product data from the data folder
const products = require("./data/products");

// Create an Express application
const app = express();

// Enable CORS so React can access this backend
app.use(cors());

// Middleware to allow JSON request bodies
app.use(express.json());

/*
  API Endpoint: GET /api/products
  Purpose: Return all products as JSON
*/
app.get("/api/products", (req, res) => {
  res.json(products); // Send product array back to the client
});

/*
  API Endpoint: GET /api/categories
  Purpose: Return unique categories extracted from products
*/
app.get("/api/categories", (req, res) => {
  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];
  res.json(categories);
});

/*
  Root Route: Just to confirm the server works
*/
app.get("/", (req, res) => {
  res.send("E-Commerce Product API is running...");
});

// Start server on port 3001
app.listen(3001, () => {
  console.log("Backend server running at http://localhost:3001");
});