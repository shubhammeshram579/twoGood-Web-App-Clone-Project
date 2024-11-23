const mongoose = require("mongoose")
require('dotenv').config(); 


const connectDB = async () => {
    try {

        // mongodb local server
        // await mongoose.connect(process.env.MONGODB_LOCAL_SERVER)
        

        // mondb atlas cloud sever
        await mongoose.connect(process.env.MONGODB_CLOUD_SERVER,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("✅ MongoDB Connected Successfully!");
        
    } catch (error) {
        console.log("❌ MONGODB connectin Failed", error);
        process.exit(1);
        
    }

}

module.exports = connectDB


