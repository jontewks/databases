var httpHelpers = require('./http-helpers');
var db = require('./db-config.js');

var getMessagesInner = function(request, response,callback) {
  // query database
  db.dbConnection.query("select * from Messages", function(err, rows, fields){
    callback(rows);
  });
};

getMessages(function(messages){
    // give variable to send response
    httpHelpers.sendResponse(response, {results: messages});
});

var postMessage = function(request, response) {
  httpHelpers.collectData(request, function(data) {
    var message = JSON.parse(data);
    // insert message into database

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
