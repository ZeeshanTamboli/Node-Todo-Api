const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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

const port = 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app }; //Export for app.test.js
