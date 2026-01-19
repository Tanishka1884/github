// Requiring the core HTTP module
const http = require('http'); [1]

// Creating the server
const server = http.createServer((req, res) => { [1]
    // This callback runs every time a request is made to the server
    console.log('request made'); [2]
}); [1]

// Setting the server to listen for requests
server.listen(3000, 'localhost', () => { [2]
    // This callback fires when the server starts listening
    console.log('listening for requests on port 3000'); [2]
}); [2]