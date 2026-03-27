const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

//Middleware create 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");




app.get("/", (req,res) => {
    res.send("Hey Vaibhav");
})

app.listen(3000, (req,res) => {
    console.log("Server running on port 3000....");
})
