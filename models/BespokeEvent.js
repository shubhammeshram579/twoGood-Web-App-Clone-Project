
// import mongoose
const mongoose = require("mongoose");


// create postSchma for add post data 
const BespokeSchma = mongoose.Schema({
  // as i need dtype colume set up
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: Number,
  date: String,
  numberofgest: Number,
  address: String,
  state: String,
  pastcode: String,
  massage: String,
  checkbox: String,
});



// export data on mongodb server create a user name model table
module.exports = mongoose.model("BespokeEvent", BespokeSchma);


