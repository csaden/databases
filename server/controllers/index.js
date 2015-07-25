var models = require('../models');
var Promise = require('bluebird');
var utils = require('../utils');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { utils.send404(res, err); }
        else { utils.sendResponse(res, {results: results}); }     
      // promise junk
      // return new Promise(function(resolve, reject) {
      //   models.messages.get(function(err, results) {
      //     if (err) { reject(err); }
      //     else { resolve(results); }
      //   })
        // .then(function(results) {
        //   utils.sendResponse(res, {results: results});
        // })
        // .catch(function(err) {
        //   utils.send404(err);
        // });
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("here?", req.body)
      models.messages.post(req.body, function(err, result) {
        if (err) { utils.send404(res, err); }
        else { utils.sendResponse(res, {objectId: result}, 201); }
      // promise junk
      // return new Promise(function(resolve, reject) {
      //   models.messages.post(req.body, function(err, result) {
      //    if (err) { reject(err); }
      //    else { resolve(result); }
      //   })
      //   .then(function(result) {
      //     utils.sendResponse(res, {objectId: result}, 201);
      //   })
      //   .catch(function(err) {
      //     utils.send404(err);
      //   });
      });
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      utils.sendResponse(res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results) {
        utils.sendResponse(res, {results: results})
      });
    },
    post: function (req, res) {
      console.log(req.body)
      models.users.post(req.body, function(result) {
        utils.sendResponse(res, {username: result}, 201);
      });
    },
    options: function(req, res) {
      utils.sendResponse(res);
    }
  }
};

