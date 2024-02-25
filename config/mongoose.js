const mongoose = require("mongoose");
let URL =process.env.MONGO_URL || "mongodb+srv://nikhilspeaks04:billi@cluster0.g8olyj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });  

    console.log("CONNECTED TO DATABASE");
  } catch (error) {
    console.log("ERROR IN CONNECTING WITH DATABASE", error);
    process.exit(); 
  }
};

module.exports = connectDb;
