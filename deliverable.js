const http = require('http');

const server = http.createServer((req, res) => {

  console.log('My name is Shlok.');
});

server.listen(4000);
