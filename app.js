const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

//requiring files
const { mongoose } = require('./config/mongoose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = {
    text: req.body.text
  };
  new Todo(todo)
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => res.status(400).send(err));
});

//List Todos
app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos });
    })
    .catch(err => res.status(400).send(err));
});

//Get an individual todo
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
  //get the id
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(err => res.status(400).send());
});

const port = 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app }; //Export for app.test.js
