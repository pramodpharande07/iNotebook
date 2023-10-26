const mongoose = require("mongoose")

const mongoURI = "mongodb://127.0.0.1:27017/cineflex"
// const mongoURI = "mongodb://localhost:27017/"

const connectToMongo=()=>{ 
    mongoose.connect(mongoURI);
    console.log("Successfully connected to mongo");
}

module.exports = connectToMongo

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// app.listen(3000, () => console.log("Server is running"));

// const MONGODB_URI = 'mongodb://127.0.0.1:27017/cineflex';
// mongoose.connect(
//   MONGODB_URI, 
//   {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//   }
// ).then((conn)=>{
//   console.log("Connected to MongoDb..");
// });

// const movieShema=new mongoose.Schema({
//   name:String,
//   description:String,
//   duration:Number,
//   rating:Number
// });

// const Movie=mongoose.model('movies',movieShema);

// const testMovie=new Movie({
//   name:"DilJale",
//   descrtion:"Action Movie and Romantic",
//   duration:160,
//   rating:9.5
// });

// testMovie.save()
// .then((doc)=>{
//   console.log(doc);
// })
// .catch(err=>{
//   console.log(err)
// });