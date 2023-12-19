//* In TypeScript, tuples are the data structure that allows you to store a fixed size collection
// of elements of different types. They are similar to arrays, but with a key difference: the types
// of elements in tuple are fixed and declared at the time of creation, wheras arrays can store the
// elemts of same type and their size can vary.

//? Ex.

//? Let's consider a scenario where you want to represent a person's basic information, including 
// their name, age and whether they have a driving licence. Using a tuple can be an appropriate
// choice because these three elements have specific order and type.

type personInfo = readonly [string, number, boolean];  // Defining a tuple type for person info

const displayPersonInfo = (person: personInfo) => {
    const [ name, age, hasDriverLicence ] = person;
    console.log(`Name: ${name}, Age: ${age}, Dricer's Licence: ${hasDriverLicence ? "Yes" : "No"}`)
}

const person1: personInfo = ["testUser", 30, true];  // Example usage
const person2: personInfo = ["testUser2", 40, false];  // Example usage

displayPersonInfo(person1);
displayPersonInfo(person2);

// Question 
//? You are building a simple e-commerce application and need to store product information.
// Define a tuple type called ProductInfo to represent each product, containing the following elements:
// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.

type ProductInfo = readonly [string, number, number]

const displayProductInfo = (product: ProductInfo) => {
    const [ name, price, quantity ] = product;
    console.log(`Product Name: ${name}, Price: ${price}, Quantity in stock: ${quantity}`)
}

const product1: ProductInfo = ["product1", 1000, 100];
const product2: ProductInfo = ["product2", 5000, 50];

displayProductInfo(product1);
displayProductInfo(product2);
