var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var conn = db.connection();
      
      conn.connect();

      var query = "SELECT objectId, message_text, createdAt, username FROM messages";

      conn.query(query, function(err, results){
        if(!err){
          console.log(results);
          console.log(results[0]);
          // results = results.map(function(result) {
             
          // });
          callback(results);
        }
        else{
          throw err;
        }
      });
      conn.end();
    }, // a function which produces all the messages
    post: function (message, callback) {
  
      var conn = db.connection();
      
      conn.connect();

      var query = "INSERT INTO messages" +
        + "(username, message_text, createdAt)"
        + "VALUES"
        + "(" + message['username'] + "," + message['message_text'] + "," 
        + message['createdAt'] + ");";

      conn.query(query, function(err, results){
        if(!err){
          console.log("new message inserted into messages table")
        }
        else{
          throw err;
        }
      });
      
      query = "SELECT objectId FROM messages WHERE createdAt = " + message['createdAt'] + ";";

      conn.query(query, function(err, result) {
        console.log(result);
        if (!err) {
          callback(result);
        }
      });

      conn.end();


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var conn = db.connection();

      conn.connect();

      var query = "SELECT username FROM users;";

      conn.query(query, function(err, results){
        if(!err){
          console.log(results);

          callback(results);
        } else {
          throw err;
        }
        conn.end();
      });
    },
    post: function (user, callback) {
    
      var conn = db.connection();
      
      conn.connect();

      var query = "INSERT INTO users (username) VALUES ("+user['username']+");";

      conn.query(query, function(err, results){
        if(!err){
          console.log("new user inserted into users table")
        }
        else{
          throw err;
        }
      });
      
      query = "SELECT username FROM users WHERE username = " + user['username'] + ";";

      conn.query(query, function(err, result) {
        console.log(result);
        if (!err) {
          callback(result);
        }
      });

      conn.end();
    }
  }
};

// function(callback, processData)