//* In TypeScript, tuples are the data structure that allows you to store a fixed size collection
// of elements of different types. They are similar to arrays, but with a key difference: the types
// of elements in tuple are fixed and declared at the time of creation, wheras arrays can store the
// elemts of same type and their size can vary.
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicence = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Dricer's Licence: ").concat(hasDriverLicence ? "Yes" : "No"));
};
var person1 = ["testUser", 30, true]; // Example usage
var person2 = ["testUser2", 40, false]; // Example usage
displayPersonInfo(person1);
displayPersonInfo(person2);
var displayProductInfo = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("Product Name: ".concat(name, ", Price: ").concat(price, ", Quantity in stock: ").concat(quantity));
};
var product1 = ["product1", 1000, 100];
var product2 = ["product2", 5000, 50];
displayProductInfo(product1);
displayProductInfo(product2);
