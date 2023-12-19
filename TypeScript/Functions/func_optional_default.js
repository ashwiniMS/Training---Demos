//? Optional and Default parameters
//* TypeScript allows you to define optional and default parameters in functions.
//* Optional parameters are denoted by appending a ? symbol after the parameter name,
//* and default parameters are specified by providing a default value in the parameter declaration.
// Example of default parameter
// fun define
var greet4 = function (name, id) {
    if (id === void 0) { id = 1; }
    return "Welcome, ".concat(name, " and your is is ").concat(id);
};
// fun call
var employee = greet4("testUser", 1);
console.log(employee);
// Example of optional parameter
// fun define
var greet5 = function (name, id) {
    return "Welcome, ".concat(name, " and your is is ").concat(id);
};
// fun call
var emp = greet5("testUser");
console.log(emp);
