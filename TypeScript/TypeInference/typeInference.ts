//* Type Inference in TypeScript refers to the ability of the TypeScript compiler to automatically
// determine and assign types of variables, expressions, and function return values based on 
// their usage and context in the code.

const myValue = "testUser";

//? What are some best practices for using type inference in TypeScript?
//* Use Type Inference for simple cases where the assigned value clearly indicates the intended type.
//* When in doubt, provide explicit type annotations to make your intentions clear.
//* Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
//* Regularly review and refactor your code to ensure the inferred types align with your intentions.

// Ex.
let testName = "user"; // The compiler infers the type string for the variable testName.
let testNumber = 20;   // The compiler infers the type number for the variable testNumber.
let isValid = true;    // The compiler infers the type boolean for the variable isValid.

// TODO Examples
//1. Declare a variable message and initialize it with the value "Hello, TypeScript!". Infer the
// type of message using type inference.
//=>
var message = "Hello, TypeScript!"; //The compiler infers the type string.
console.log(message);

//2. Write a function called calculateArea that takes the length and width parameters of type
// number and return their product. Infer the type of message using type inference.
//=> 
function calculateArea(len: number, wid: number) {
    return len * wid;
}

const result = calculateArea(10, 5);
console.log(result);
//The compiler infers the type number.
