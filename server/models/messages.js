var db = require('../db');
const mysql = require('mysql2');

module.exports = {
  getAll: function (callback) {//callback formatted like (err, data)
    //connect to db
    //query all messages
    //call callback with messages
    const dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat',
    });
    dbConnection.connect();
    dbConnection.query('SELECT text FROM messages', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
    dbConnection.end();
  }, // a function which produces all the messages

  create: function (message, callback) {//callback formatted like (err)
    //
    const dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat',
    });
    dbConnection.connect();
    dbConnection.query('INSERT INTO messages (text) VALUES (message)', (err) => {
      if (err) {
        callback(err);
      }
    });

  } // a function which can be used to insert a message into the database
};

