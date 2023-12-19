//? Optional and Default parameters

//* TypeScript allows you to define optional and default parameters in functions.
//* Optional parameters are denoted by appending a ? symbol after the parameter name,
//* and default parameters are specified by providing a default value in the parameter declaration.

// Example of default parameter
// fun define
var greet4 = (name: string , id: number = 1): string => {
    return `Welcome, ${name} and your is is ${id}`;
}

// fun call
const employee = greet4("testUser", 1);
console.log(employee);

// Example of optional parameter
// fun define
var greet5 = (name: string , id?: number): string => {
    if (id) {
        return `Welcome, ${name} and your is ${id}`;
    } else {
        return `Welcome, ${name}`;
    }
}

// fun call
const emp = greet5("testUser");
const emp2 = greet5("testUser", 10);
console.log(emp);

