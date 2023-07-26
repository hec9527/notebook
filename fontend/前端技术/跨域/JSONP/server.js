const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
  });

  console.log(`${req.url}`);
  if (req.url == '/') {
    res.write(fs.readFileSync('./index.html').toString());
    res.end();
  } else if (req.url == '/user') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(
      JSON.stringify({
        name: 'saga',
        age: 23,
      })
    );
  } else {
    res.write('hello world');
    res.end();
  }
});

server.listen(10086, 'localhost', () => {
  console.log(`server start at: http://localhost:${server.address().port}`);
});

process.on('exit', () => {
  console.log('process exist');
  server.close();
});
