const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 9000;
const MONGODB = process.env.MONGODB;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connected"))
  .catch((err) => console.error("db connection error:", err));


const databaseSeeder = require('./databaseSeeder');
const userRoute = require('./routes/User');
const productRoute = require("./routes/Product");
// Database seeder routes
app.use('/api/seed', databaseSeeder);

// User routes
app.use('/api/users', userRoute);

//Products routes
app.use('./api/products', productRoute);



//Connect to Port
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

// Test Product route
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
