//! Function Declaration:
//* You can declare a function by using the function keyboard, followed by the function name,
// a list of parameters enclosed in parentheses, and a return type.
// * The function body contains the code that will be executed when the function is called.
//! Function Invocation
//* To execute a function you simply invocate it by using it's name followed by parentheses.
//* You can provide arguments(actual values) for the parameters defined in the function declaration.
// Greeting function
function greet(name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
}
// function call
greet("testUser", 1);
// With arrow function
// Greeting function
var greet2 = function (name, id) {
    console.log("Welcome, ".concat(name, " and your id is ").concat(id));
};
// function call
greet2("testUser", 1);
//? Function return: How do you specify a return type of a function in TypeScript
//* To specify the return type of a function, you can use the colon (:) followed by the desired 
// type after the function's parameter list.
// Greeting function
var greet3 = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
// function call
var returnValue = greet3("testUser", 1);
console.log(returnValue);
// TODO Examples
//1. Write a function called isPalindrome that takes a string as a parameter and returns true if the string 
// is a palindrome (reads the same and backwards), and false otherwise
var isPalindrome = function (palin) {
    var splittedString = palin.split("").reverse().join("");
    return splittedString === palin;
};
console.log(isPalindrome("23432"));
//2. Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
var testArray = [10, 20, 30, 40, 50];
var calculateAverage = function (array) {
    var sumOfValues = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        sumOfValues = sumOfValues + item;
    }
    var average = sumOfValues / array.length;
    console.log("Average: ", average);
};
calculateAverage(testArray);
//3. Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
var arr = [10, 20, 30, 40, 50];
function findMaxValue(array) {
    var maxValue = -Infinity;
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var item = array_2[_i];
        if (item > maxValue) {
            maxValue = item;
        }
    }
    console.log(maxValue);
}
findMaxValue(arr);
