let fs = require('fs');

// Code w/o callback 
//let data:any = fs.readFileSync('example.txt');
//console.log(data.toString());

// Code with callback
fs.readFile('example.txt', (error: any, data: any) => {
    if(error) return console.log(error);
    console.log(data.toString());
})

console.log('Program ended');
