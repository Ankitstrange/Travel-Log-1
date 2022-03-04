const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const databaseURL = process.env.DATABASE_URL;
function connect(){
  mongoose.connect(databaseURL+'travel-log')
      .then(function(){console.log("Database connected successfully!!")})
      .catch(function(){console.log("Database connection could not be established, exiting process");
                        process.exit(1)
                      });
}

module.exports.connect = connect;