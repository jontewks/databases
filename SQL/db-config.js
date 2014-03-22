var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
exports.Messages = sequelize.define('Messages', {
  roomname: Sequelize.STRING,
  username: Sequelize.STRING,
  message: Sequelize.STRING
});
exports.Messages.sync();

exports.addToMessages = function(message){
  exports.Messages.sync().success(function(){
    var newMessage = exports.Messages.build({
      roomname: message.roomname,
      username: message.username,
      message: message.message
    });
    newMessage.save().success(function(){
      console.log(message, " saved to messages table");
    });
  });
};

exports.getAllMessages = function(callback){
  var arrayOfMessages = [];

  exports.Messages.findAll().success(function(messages){
    for( var i = 0; i < messages.length; i++){
      arrayOfMessages.push(messages[i].dataValues);
    }
    callback(arrayOfMessages);
  });
};
