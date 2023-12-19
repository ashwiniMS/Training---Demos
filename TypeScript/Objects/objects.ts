//* In TypeScript, objects are used to represent data with key-value pairs.
// Each key in the object is a string that maps to a value.

//? Let's consider a real-life example of representing a person's information using TypeScript objects.
//? name, age, isStudent, address{city, country}

// Ex.
const productperson: {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string;
    }
} = {
    name: "user_name",
    age: 25,
    isStudent: true,
    address: {
        city: 'Pune',
        country: "India",
    }
}

// TODO Access the objects data
console.log('Country: ', person.address.country);

// TODO Updating object properties
person.address.country = "Japan";
console.log('Country: ', person.address.country);
// person.address.country = 123;  => It won't work in TypeScript 

// TODO - Create a product object
//? Define a product with properties for name, price, and quantity. Create a product object with
// the following data:
// name: "Laptop"
// Price: 1000
// Quantity: 5

const Product: {
    name: string;
    price: number;
    quantity: number;
} = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
}
