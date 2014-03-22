var httpHelpers = require('./http-helpers');
var db = require('./db-config.js');
var url = require('url');

var getMessages = function(request, response) {
  db.getAllMessages(function(messagesArray){
    httpHelpers.sendResponse(response, {results: messagesArray});
  });
};

var postMessage = function(request, response) {
  httpHelpers.collectData(request, function(data) {
    var message = JSON.parse(data);
    // insert message into database
    db.addToMessages(message);
    httpHelpers.sendResponse(response, null, 201);
  });
};

var options = function(request, response){
  httpHelpers.sendResponse(response);
};

var actions = {
  'GET' : getMessages,
  'POST': postMessage,
  'OPTIONS': options
};

exports.handler = function(request, response) {
  var action = actions[request.method];
  if (action){
    action(request, response);
  } else {
    httpHelpers.sendResponse(response, null, 404);
  }
};

var objectToInsert = function(object){
  var roomname, username, message, result;
  roomname = object.roomname;
  username = object.username;
  message = object.message;
  result = "insert into Messages (roomname, username, message) values('" + roomname + "','" + username + "','"  + message +"')";

  return result;
};
