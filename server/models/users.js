var db = require('../db');
const mysql = require('mysql2');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT (text) FROM usernames', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  create: function (usernames, callback) {
    var statement = 'INSERT INTO usernames (text) VALUES (' + db.escape(usernames) + ')';
    db.query(statement, (err) => {
      if (err) {
        callback(err);
      } else {
        console.log('created user');
        callback(null);
      }
    });
  }
};
