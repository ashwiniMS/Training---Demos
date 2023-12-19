//* In TypeScript a type alias is a way to give a name to a specific type or combination of types.
// It allows you to create a custom name for a type, making it easier to reuse and refer to the 
// same type in different parts of your code. Type aliases provide better readability , organization
// and abstraction of complex types.

//* To define the Type alias, you use the type keyword followed by the alias name and the type definition.

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string;
    }
}

//Ex.
const personObj: Person = {
    name: "user_name",
    age: 25,
    isStudent: true,
    address: {
        city: 'Pune',
        country: "India",
    }
}

// todo Create a Product object
//? Define an interface or type representing a product with properties for name, price, and quantity.
// Create a product object with the following data.
// name: "Laptop", Price: 1000, quantity: 5

type Product = {
    name: string;
    price: number;
    quantity: number;
}

const ProductObj: Product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
}

//! Calculate total price 
//? Given the product object from the previous question, write a function called calculateTotalPrice
// that calculates and returns the total price (price * quantity) of product.

const calculateTotalPrice = (product: Product) => {
    return product.price * product.quantity;
}

console.log(calculateTotalPrice(ProductObj))
