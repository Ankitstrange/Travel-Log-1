const mongoose = require('mongoose');

function connect(){
  mongoose.connect('mongodb://localhost:27017/travel-log')
      .then(function(){console.log("Database connected successfully!!")})
      .catch(function(){console.log("Database connection could not be established, exiting process");
                        process.exit(1)
                      });
}

module.exports.connect = connect;