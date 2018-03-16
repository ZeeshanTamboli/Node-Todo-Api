const mongoose = require('mongoose');
const db = require('./database');

mongoose
  .connect(db.mongoURI)
  .then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err));

module.exports = { mongoose };
