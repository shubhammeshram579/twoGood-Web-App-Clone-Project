
// import mongoose
const mongoose = require("mongoose");


// create postSchma for add post data 
const afternoonProduct = mongoose.Schema({
  // as i need dtype colume set up
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  name: String,
  qty: String,
  price: String,
  pimage: String
});



// export data on mongodb server create a user name model table
module.exports = mongoose.model("Afternoon", afternoonProduct);


