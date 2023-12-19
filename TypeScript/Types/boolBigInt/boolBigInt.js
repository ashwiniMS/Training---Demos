// * -------------------
// * Boolean Type
// * -------------------
//? In TypeScript, the boolean type represents a value that can be either true or false.
// It is one of the basic primitive types in the language.
// Ex.
var isBoolean = true;
var isDone = false;
// Question
// 1. Write a TypeScript function called isEven that takes a number as a parameter and returns 
// true if the number is even and false otherwise.
function isEven(num) {
    return num % 2 === 0;
}
console.log("isEven: ", isEven(10));
// 2. Write a TypeScript function called isDivisibleBy4and8 that takes a number as a parameter
// and returns true if the number is divisible by both 4 and 8.
function isDivisibleBy4and8(num) {
    return num % 4 === 0 && num % 8 === 0;
}
console.log("isDivisible: ", isDivisibleBy4and8(16));
// * -------------------
// * BigInt Type
// * -------------------
//? It is a built-in type that allows you to work with numbers that are larger than the range 
// supported by the regular number type.
//? BigInt literals are written by appending the n suffix to an integer 
//? In JS we can't read the whole numbers beyond 2 raise to power 53
// Ex.
var maxNumber = 9007199254740992n;
console.log(maxNumber);
var anotherBigNumber = BigInt(9007199254740925n);
console.log(anotherBigNumber);
