const mongoose = require('mongoose');
const { connect, connection } = require("mongoose");
require("dotenv").config();

//MongoDB connection config
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;