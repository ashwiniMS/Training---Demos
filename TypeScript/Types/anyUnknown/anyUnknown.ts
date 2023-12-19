// * -------------------
// * Any Type
// * -------------------
//? The any type is the most flexible type in TypeScript. It essentially turns of all type checking
// for the variables or expressions it is applied to.
//? You will see any type when you first write the code.

// Ex.
let myFavNumber:any = 20;
myFavNumber = "test"

//! useCases
//* Working with dynamic data: When dealing with data from dynamic sources like user input,
// network responses or deserialized JSON objects, the any type can be useful.

//* Migrating from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using 
// the any type can be a convenient way to quickly annotate variables and functions without 
// immediately specifying their precise type.

// * -------------------
// * Unknown Type
// * -------------------
//? The Unknown type is a safer alternative to any beacuse it still enforces type checking
// and type safety.
//? Variables of type unknown can hold values of any type, but you must perform type checks or
// type assertions before using them in specific ways.

let num2: unknown;
num2 = 5;
num2 = "test";
num2 = true;

if (typeof num2 === 'number') {
    console.log("It's a number");
} else if (typeof num2 === 'boolean') {
    console.log("It's a boolean value");
}
