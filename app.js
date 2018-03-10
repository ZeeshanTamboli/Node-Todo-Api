const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/TodoApp')
  .then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err));

// const Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// // const newTodo = new Todo({
// //   text: 'Cook dinner'
// // });

// // newTodo
// //   .save()
// //   .then(doc => console.log(`Saved todo: ${doc}`))
// //   .catch(err => console.log('err'));

// const otherTodo = new Todo({
//   text: true
// });

// otherTodo
//   .save()
//   .then(doc => console.log(`Saved todo: ${doc}`))
//   .catch(err => console.log(err));

const Users = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

const newUser = new Users({
  email: ' zeeshan@gmail.com  '
});

newUser
  .save()
  .then(user => console.log(`Saved user is: ${user}`))
  .catch(err => console.log(err));
