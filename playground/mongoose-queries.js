const { mongoose } = require('../config/mongoose');
const { Todo } = require('../models/Todo');
const { User } = require('../models/User');
const { ObjectID } = require('mongodb');

const id = '5aa37e6afafa3d1444de752a';

// const id = '5aa62a424f2f73024caafd0211';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log(`Todos: ${todos}`);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log(`Todo ${todo}`);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log(`Todo by Id ${todo}`);
//   })
//   .catch(e => console.log(e));

User.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log('Unable to find user');
    }
    console.log('User by id', todo);
  })
  .catch(e => console.log(e));
