var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

dbConnection.connect((err) => {
  if(err) {
    console.log('failed to connect to db');
  } else {
    console.log('successfully connected to db');
  }
});

module.exports = dbConnection;