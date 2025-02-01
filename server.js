const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection open indefinitely
  // Missing res.end() or res.writeHead() calls lead to this bug
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});