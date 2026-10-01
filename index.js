const dotenv = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

// Load enviroment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

//Middleware create 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


// Routers
app.use("/owners" , ownersRouter);
app.use("/users" , usersRouter);
app.use("/products", productsRouter);


// Test Dummy Route
app.get("/", (req,res) => {
    res.send("Hey Vaibhav");
})


// Start the server
app.listen(3000, (req,res) => {
    console.log("Server running on port 3000....");
})
