// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


var options = {
  host: 'ops.bloomboard.com',
  path: ':3000/invoke/559c8b3d7838f9f549252c4c?token=k4r5r31fccn'
};

callback = function(response) {
  response.on('end', function () {
    console.log("Ansijet Return");
  });
}

http.request(options, callback).end();
