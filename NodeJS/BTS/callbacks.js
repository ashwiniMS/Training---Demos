var fs = require('fs');
//let data:any = fs.readFileSync('example.txt');
//console.log(data.toString());
fs.readFile('example.txt', function (error, data) {
    if (error)
        return console.log(error);
    console.log(data.toString());
});
console.log('Program ended');
