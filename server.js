var restify = require('restify');

function respond(req, res, next) {
  res.send('your tag id is ' + req.params.tag);
}

var server = restify.createServer();
server.get('/getname/:tag', respond);
server.head('/getname/:tag', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});