//? Map and Filter methods in TypeScript

const numbers3: number[] = [1, 2, 3, 4, 5];

//! Map method
// The map method creates a new array by applying a provided function to each elememnt of the 
// original array. It transforms each element and returns a new array with the tranformed values.

//? 1: Doubling each number

const doubledData: number[] = numbers3.map((currValue: number) => currValue * 2)
console.log('Doubled Data: ', doubledData);

//? 2: Converting numbers to strings
const numberToString: string[] = numbers3.map((currValue: number) => currValue.toString())
console.log('String array: ', numberToString);


//! Filter method

//? 1: Filtering even numbers
const evenNumbers = numbers3.filter((currValu) => currValu % 2 === 0);
console.log("Even Numbers: ", evenNumbers);

//? 2: FIltering numbers greater than 3 
const numbersGreaterThanThree  = numbers3.filter((currValu) => currValu > 3);
console.log("numbersGreaterThanThree: ", numbersGreaterThanThree);


//* Practice questions for map:
//? 1: Given an array of strings representing userNames, create a new array that contains the uppercase version of each name.

let userNames: string[] = ["user1", "user2", "user3", "user4"];
const newUpperCaseArray = userNames.map((currVal) => currVal.toUpperCase());
console.log("newUpperCaseArray", newUpperCaseArray);

//? 2: Given an array of numbers, create a new array that contains the square of each number.

let arrayOfNumbers = [2, 3, 4, 5];
const arrayOfSquares = arrayOfNumbers.map((currVal) => currVal * currVal);
console.log("arrayOfSquares", arrayOfSquares);

//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
//* const students: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

const students: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const filterdArray1 = students.filter((currVal) => currVal.length > 4);
console.log(filterdArray1);

//? 2: Given an array of strings, filter out the names that start with the letter "A".

const students2: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const filterdArray2 = students.filter((currVal) => currVal.indexOf("A") === 0);
console.log(filterdArray2);
