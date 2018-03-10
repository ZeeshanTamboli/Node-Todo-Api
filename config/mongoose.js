const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/TodoApp')
  .then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err));

module.exports = { mongoose };
