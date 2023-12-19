//* In TypeScript a type alias is a way to give a name to a specific type or combination of types.
// It allows you to create a custom name for a type, making it easier to reuse and refer to the 
// same type in different parts of your code. Type aliases provide better readability , organization
// and abstraction of complex types.
//Ex.
var personObj = {
    name: "user_name",
    age: 25,
    isStudent: true,
    address: {
        city: 'Pune',
        country: "India",
    }
};
var ProductObj = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
//! Calculate total price 
//? Given the product object from the previous question, write a function called calculateTotalPrice
// that calculates and returns the total price (price * quantity) of product.
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(ProductObj));
