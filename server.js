// content of server.js
const http = require('http');
const port = 7654;

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


// THIS IS JUST FOR TESTING PURPOSES
exports.multiply = function (multiplier1, multiplier2) {
  return multiplier1*multiplier2;
};