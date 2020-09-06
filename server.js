var https = require('https')
var fs = require('fs')
var http = require('http');
var express = require('express')
// ssl
var key = fs.readFileSync('/etc/letsencrypt/live/bitfundme.rocks/privkey.pem');
var cert = fs.readFileSync('/etc/letsencrypt/live/bitfundme.rocks/fullchain.pem')

const app = express();
app.use(express.static('/home/davidweisss/bitfundmeBlog/_site/'));

// http/https server
var https_options = {
  key: key,
  cert: cert
};
var PORT = 3000;
var HOST = '0.0.0.0';
server = https.createServer(https_options, app).listen(PORT, HOST);
console.log('HTTP Server listening on %s:%s', HOST, PORT);

// Redirect from http port 80 to https
// //var http = require('http');
// //http.createServer(function (req, res) {
// //  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
// //  res.end();
// //}).listen(80);
