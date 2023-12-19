//? Map and Filter methods in TypeScript
var numbers3 = [1, 2, 3, 4, 5];
//! Map method
// The map method creates a new array by applying a provided function to each elememnt of the 
// original array. It transforms each element and returns a new array with the tranformed values.
//? 1: Doubling each number
var doubledData = numbers3.map(function (currValue) { return currValue * 2; });
console.log('Doubled Data: ', doubledData);
//? 2: Converting numbers to strings
var numberToString = numbers3.map(function (currValue) { return currValue.toString(); });
console.log('String array: ', numberToString);
//! Filter method
//? 1: Filtering even numbers
var evenNumbers = numbers3.filter(function (currValu) { return currValu % 2 === 0; });
console.log("Even Numbers: ", evenNumbers);
//? 2: FIltering numbers greater than 3 
var numbersGreaterThanThree = numbers3.filter(function (currValu) { return currValu > 3; });
console.log("numbersGreaterThanThree: ", numbersGreaterThanThree);
//* Practice questions for map:
//? 1: Given an array of strings representing userNames, create a new array that contains the uppercase version of each name.
var userNames = ["user1", "user2", "user3", "user4"];
var newUpperCaseArray = userNames.map(function (currVal) { return currVal.toUpperCase(); });
console.log("newUpperCaseArray", newUpperCaseArray);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
var arrayOfNumbers = [2, 3, 4, 5];
var arrayOfSquares = arrayOfNumbers.map(function (currVal) { return currVal * currVal; });
console.log("arrayOfSquares", arrayOfSquares);
//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
//* const students: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var students = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var filterdArray1 = students.filter(function (currVal) { return currVal.length > 4; });
console.log(filterdArray1);
//? 2: Given an array of strings, filter out the names that start with the letter "A".
var students2 = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var filterdArray2 = students.filter(function (currVal) { return currVal.indexOf("A") === 0; });
console.log(filterdArray2);
