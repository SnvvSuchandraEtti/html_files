// http-server.js
const http = require('http');

// Create the server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, this is your first Node.js web server!');
}).listen(3000);

console.log("Server is running on http://localhost:3000");
