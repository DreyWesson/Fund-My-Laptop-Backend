const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server-core');


let uri = process.env.MONGODB_URI;
console.log(uri)

/**
 * Uncomment this line of code to use a local MongoDB server
 */

  if (process.env.NODE_ENV !== 'production') {
    uri = 'mongodb://localhost:27017/myapp'
  }

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

function initDbConfig() {
    mongoose
    .connect(uri, dbOptions)
    .then(() => console.log("Connected to database!"))
    .catch((error) => console.log("Error!. Couldn't connect to database ", error));
}

module.exports = initDbConfig;