const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Node js Project</title><head>');
    res.write('<body><form  method="POST"><button onclick="/home" type="submit"> Welcome home</button><button onclick="/about" type="submit"> About Us </button><button onclick="/node" type="submit"> Node js page</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/home' && method === 'POST') {
    fs.writeFileSync('message.txt', ' Welcome home');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  
    return res.end();
  }
  if (url === '/about' && method === 'POST') {
    fs.writeFileSync('message.txt', ' Welcome About us page');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  
    return res.end();
  }
  if (url === '/node' && method === 'POST') {
    fs.writeFileSync('message.txt', ' Welcome to Node js page');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
