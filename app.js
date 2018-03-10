const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/TodoApp')
  .then(() => console.log('MongoDB connected....'))
  .catch(err => console.log(err));

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// const newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo
//   .save()
//   .then(doc => console.log(`Saved todo: ${doc}`))
//   .catch(err => console.log('err'));

const otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});

otherTodo
  .save()
  .then(doc => console.log(`Saved todo: ${doc}`))
  .catch(err => console.log('err'));
