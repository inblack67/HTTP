const http = require('http');


const todos = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 3, name: 'three'},
  {id: 4, name: 'four'}
];

const server = http.createServer((req,res) => {

  let body = [];
  // req is a readable stream
  req.on('data', chunk => {
    body.push(chunk);
  })
  .on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);
  })
  ;

  // res.statusCode = 404;
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader('X-Powered-By', 'Node.js');
  // res.write('<h1>hello hells</h1>');
  // res.write('<h4>Worlds</h4>');z

  res.writeHead(404, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  });
  
  res.end(JSON.stringify({
    // success: true,
    // data: todos

    success: false,
    error: 'Not found shit',
    data: null

  }));    // auto send 200 response

  // console.log(req.headers.authorization);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});