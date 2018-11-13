// Require/import the HTTP module
// already part of node js
const http = require("http");

// Define a port to listen for incoming requests
// process.env.PORT is for when we use heroku to select a port for us
const PORT = process.env.PORT || 8080;

// Create a generic function to handle requests and responses
const handleRequest = (request, response) => {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
  console.log('%j', request.headers);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


// installed nodemon per Musa
// type 'nodemon server.js' in this folder