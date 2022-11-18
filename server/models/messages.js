var db = require('../db');


module.exports = {
  getAll: function (callback) {//callback formatted like (err, data)
    //connect to db
    //query all messages
    //call callback with messages

    db.query('SELECT text FROM messages', (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log(result);
        callback(null, result);
      }
    });

  }, // a function which produces all the messages

/*
[
    {
        "text": "testData"
    }
]
*/

  create: function (message, callback) {//callback formatted like (err)
    let test = 'testData';
    //let statement = `INSERT INTO messages (text) VALUES ("${test}")`;
    let statement = `INSERT INTO messages (text) VALUES (${db.escape(message)})`;
    db.query(statement, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        console.log('created');
        callback(null);
      }
    });

  } // a function which can be used to insert a message into the database
};

