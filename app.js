const http = require('http');


const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
 
  if (url === '/home' ) {
    res.write('<head><title>Welcome home</title><head>');
    res.statusCode = 302;
    res.setHeader('Location', '/home');
  
    return res.end();
  }
  if (url === '/about') {
    res.write('<head><title>Welcome About us page</title><head>');
    res.statusCode = 302;
    res.setHeader('Location', '/about');
  
    return res.end();
  }
  if (url === '/node') {
    res.write('<head><title>Welcome to Node js Pge</title><head>');
    res.setHeader('Location', '/node');
  
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
