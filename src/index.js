const express = require("express")
const mongoose = require("mongoose")
const multer= require("multer");
const { AppConfig } = require('aws-sdk');
const route = require("./routes/route")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( multer().any())


mongoose.connect("mongodb+srv://prageet:4zGItzVIrinYLkAI@myproject.kthcntq.mongodb.net/booksManagement",{useNewUrlParser:true})
.then (()=>console.log(("MongoDb is connected")))
.catch (err=> console.log(err.message))

app.use ("/",route)
app.listen(3000, function(){console.log("express is running on port 3000")})
