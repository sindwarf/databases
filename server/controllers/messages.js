var models = require('../models');



module.exports = {
  get: function (req, res) {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    //don't have to pass down anything except a callback because this only gets called when reading all
    models.messages.getAll((err, messages) => {
      if (err) {
        res.status(404).json('Testing Error');
        //res.send(404, 'Something went wrong in get');
      } else {

        //res.send(200, messages);//sends error code and data
        //console.log('response data: ', res.data);
        res.status(200).json(messages);
        //json
      }
    });
  },
  // a function which handles a get request for all messages
  //chatterbox client sends a get request
  //app is listening for requests and sends it here
  //call models as a promise


  post: function (req, res) {
    console.log('Serving request type ' + req.method + ' for url ' + req.url + 'with the body ' + JSON.stringify(req.body));
    models.messages.create(req.body.message, (err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });
  }
  // a function which handles posting a message to the database
  //chatterbox client sends a post request
  //app is listening for requests so it sends it here
  //set response code
  //call models as a promise

  /*
  res.status(200).json({ message: "Hello world" })

res.json({token});

res.status(500).json('Server Error');

return res.status(400).json({
  errors: errors.array()
});
*/
};
