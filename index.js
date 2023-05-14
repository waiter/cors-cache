const http = require('http');
const fs = require('fs');
const { parse } = require('url'); 

const cacheHeader = {
  'Cache-Control': 'max-age=1000000'
}

const server = http.createServer().listen(3000);
server.on('request', (req, res) => {
  const { pathname } = parse(req.url, true);
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    return res.end(fs.readFileSync('static/index.html'));
  } else if (pathname === '/api/1.js') {
    res.writeHead(200, { ...cacheHeader, 'Access-Control-Allow-Origin': req.headers.origin });
  } else if (pathname === '/api/2.js') {
    res.writeHead(200, { ...cacheHeader, 'Access-Control-Allow-Origin': '*' });
  } else if (pathname === '/api/3.js') {
    res.writeHead(200, { ...cacheHeader, 'Access-Control-Allow-Origin': req.headers.origin, 'vary': 'origin' });
  }

  res.write('hello world');
  res.end();
});
