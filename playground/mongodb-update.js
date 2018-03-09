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
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID('5aa232817e2e7e5bb9f724e0')
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection('Users')
    .findOneAndUpdate(
      {
        _id: new ObjectID('5aa14ca93033be3828f286eb')
      },
      {
        $set: {
          name: 'Zeeshan Tamboli'
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  //db.close();
});
