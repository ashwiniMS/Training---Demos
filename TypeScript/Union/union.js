//* Union Type allows you to specify that a variable can hold values of multiple types.
// You use the symbol | to to define a union type.
//Ex.
var inputValue = function (value) {
};
inputValue(55);
inputValue("Hello world");
inputValue(true);
// Ex. Create a function that can accept different types of arguments and perform different actions
// based on the type of the input. Suppose we want to create a function which doubles the value if 
// the input is a number or converts the input to uppercase if it's a string
var userInput = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else {
        return value.toUpperCase();
    }
};
console.log(userInput(10));
console.log(userInput('test'));
