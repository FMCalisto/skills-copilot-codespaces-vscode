// Create web server
// Run node comments.js
// Go to http://localhost:3000
// To stop server, press Ctrl+C

// Load the http module to create an http server.
var http = require('http');

// Load the fs module to read file system
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log('Request received: ' + request.url);

  // Read the file and print its contents.
  fs.readFile('comments.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });

});

// Listen on port 3000
server.listen(3000);

// Put a friendly message on the terminal
console.log('Server running at http://localhost:3000/');

// Put a friendly message on the terminal
console.log('Press Ctrl+C to quit.');

// End of comments.js