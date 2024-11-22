
// i need some npm libries 
// npm i mongoose passport passport-local passport-local-mongoose express-session 

// import mongoose
const mongoose = require("mongoose");
const passport = require("passport");

require('dotenv').config(); // Load environment variables
// import passport local mongoose
const plm = require("passport-local-mongoose");


// mongodb local server
// mongoose.connect(process.env.MONGODB_LOCAL_SERVER);

// mongodb cloud server
// mongoose.connect(process.env.MONGO_URI);



mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 15000, // Timeout after 5 seconds if no server responds
  socketTimeoutMS: 45000,        // Close sockets after 45 seconds of inactivity
  retryWrites: true              // Enable retryable writes
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});





// create userSchma for example in mysql table creation
const userSchma = mongoose.Schema({
  // as i need dtype colume set up
  first_name: String,
  last_name: String,
  phone_number: Number,
  email: String,
  company: String,
  address: String,
  country: String,
  state: String,
  pastcode: Number,
  radio: String,
  username: String,
  password: String,
 
  // create colume for connect post id
  eventPost:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BespokeEvent"
  }],
  gOrder:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "groupOrder"
  }],
  donate:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "donate"
  }],
  addcard:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart"
  }],

   // boards: {
  //   type: Array,
  //   default: []
  // },


});



// plugin passport userSchma
userSchma.plugin(plm);


// export data on mongodb server create a user name model table
module.exports = mongoose.model("user", userSchma);


