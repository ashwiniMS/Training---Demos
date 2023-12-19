var http = require('http');
var casual = require('casual');
var server = http.createServer(function (req, res) {
    res.end(casual.country);
});
server.listen(4000, function () {
    console.log("Server started at Port: 4000.");
});
