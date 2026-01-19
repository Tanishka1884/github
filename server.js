const http = require('http'); // Implied by server creation [3]
const fs = require('fs'); // Required for reading HTML files [1]

const server = http.createServer((req, res) => {
  // 1. Set header content type [1, 4]
  res.setHeader('Content-Type', 'text/html');

  // 2. Simple Routing Logic [5-7]
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200; // Success status [8, 9]
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200; // Success status [9]
      break;
    case '/about-me': // Redirect logic [10, 11]
      res.statusCode = 301; // Moved permanently [11]
      res.setHeader('Location', '/about'); // Redirect to new URL [12]
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404; // Not found status [9]
      break;
  }

  // 3. Read the HTML file and send response [1, 7, 13, 14]
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); // End response on error to avoid hanging [13]
    } else {
      // res.write(data); // Option to write data separately [13]
      res.end(data); // Sending data directly through end() [14]
    }
  });
});

// 4. Start the server on port 3000 [3]
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});