

// get the http module
const http = require('http');

// define some constants
const hostname = '127.0.0.1';
const port = 3000;

// create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// put the server in listening mode
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
