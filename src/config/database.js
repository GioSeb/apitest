const mongoose = require("mongoose");
require("dotenv").config();

//MONGODB_URI -> .env

const connected = () => {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((db) => {
        console.log("Database connected");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  module.exports = connected;