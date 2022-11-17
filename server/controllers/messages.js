var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    //don't have to pass down anything except a callback because this only gets called when reading all
    models.messages.create((err, messages) => {
      if (err) {
        res.send(404, 'Something went wrong in get');
      } else {
        res.send(200, messages);//sends error code and data
      }
    });
  },
  // a function which handles a get request for all messages
  //chatterbox client sends a get request
  //app is listening for requests and sends it here
  //call models as a promise


  post: function (req, res) {
    console.log('Serving request type ' + req.method + ' for url ' + req.url + 'with the body ' + req.body);
    models.messages.create(req.body, (err) => {
      if (err) {
        res.send(400, 'Something went wrong in post');
      } else {
        res.send(201, 'Sucessfully posted message');
      }
    });
  }
  // a function which handles posting a message to the database
  //chatterbox client sends a post request
  //app is listening for requests so it sends it here
  //set response code
  //call models as a promise

};
