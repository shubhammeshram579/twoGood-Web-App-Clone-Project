
// import mongoose
const mongoose = require("mongoose");


// create postSchma for add post data 
const productSchema = mongoose.Schema({
  // as i need dtype colume set up
  // user:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:"user"
  // },
  producttitle:{
    type:String,
  },
  pPrice:{
    type:String
  },
  pImage:{
    type: String
  },
  quantity: {
    type: Number,
    default: 1, // Default to 1 quantity
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});



// export data on mongodb server create a user name model table
module.exports = mongoose.model("Products", productSchema);


