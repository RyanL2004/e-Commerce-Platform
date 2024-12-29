const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const cors = require("cors");
const MONGODB = process.env.MONGODB;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
mongoose.connect(MONGODB) 
  .then(() => console.log("db connected"))
  .catch((err) => console.error("db connection error:", err));


const databaseSeeder = require('./databaseSeeder');
const userRoute = require('./routes/User');
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json());
app.use(cors());
// Database seeder routes
app.use('/api/seed', databaseSeeder);

// User routes
app.use('/api/users', userRoute);

//Products routes
app.use('/api/products', productRoute);

//Orders Routes
app.use('/api/orders', orderRoute);



//Connect to Port
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

// Test Product route
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
