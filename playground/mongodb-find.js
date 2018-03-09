//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB server.');
  }

  // db
  //   .collection('Todos')
  //   .find({
  //     _id: new ObjectID('5aa219127e2e7e5bb9f7224f')
  //   })
  //   .toArray()
  //   .then(docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(err => console.log(err));

  // db
  //   .collection('Todos')
  //   .find()
  //   .count()
  //   .then(count => {
  //     console.log(`Todos count: ${count}`);
  //   })
  //   .catch(err => console.log(err));

  db
    .collection('Users')
    .find({ name: 'Zeeshan Tamboli' })
    .count()
    .then(count => {
      console.log(`Users count: ${count}`);
    })
    .catch(err => console.log(err));

  //db.close();
});
