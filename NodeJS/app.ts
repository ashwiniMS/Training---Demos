let http = require('http');
let casual = require('casual');

let server = http.createServer((req: any, res: any) => {
    res.end(casual.city);
});

server.listen(4000, () => {
    console.log("Server started at Port: 4000.");
});
