//* In TypeScript, objects are used to represent data with key-value pairs.
// Each key in the object is a string that maps to a value.
//? Let's consider a real-life example of representing a person's information using TypeScript objects.
//? name, age, isStudent, address{city, country}
// Ex.
var person = {
    name: "user_name",
    age: 25,
    isStudent: true,
    address: {
        city: 'Pune',
        country: "India",
    }
};
// TODO Access the objects data
console.log('Country: ', person.address.country);
// TODO Updating object properties
person.address.country = "Japan";
console.log('Country: ', person.address.country);
// person.address.country = 123;  => It won't work in TypeScript 
