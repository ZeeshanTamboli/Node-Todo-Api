const { mongoose } = require('../config/mongoose');
const { Todo } = require('../models/Todo');
const { User } = require('../models/User');

const { ObjectID } = require('mongodb');

//Todo.remove({}).then(result => console.log(result));

//Todo.findOneAndRemove //returns the removed document unlike Todo.remove({})
// Todo.findByIdAndRemove //returns the removed document

// Todo.findOneAndRemove({_id: '5aa9394f7e2e7e5bb9f75218'}).then(todo => {

// })

Todo.findByIdAndRemove('5aa9394f7e2e7e5bb9f75218').then(todo => {
  console.log(todo);
});
