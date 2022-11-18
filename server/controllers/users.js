var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    models.users.getAll((err, users) => {
      if (err) {
        res.status(404).json('Error');
      } else {
        res.status(200).json(users);
      }
    });
  },

  post: function (req, res) {
    console.log('Serving request type ' + req.method + ' for url ' + req.url + ' with the body ' + JSON.stringify(req.body));
    models.users.create(req.body.username, (err) => {
      if (err) {
        res.status(404).json('Error');
      } else {
        res.sendStatus(201);
      }
    });
  }
};
