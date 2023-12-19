//* Arrays in TypeScript come with built-in methods that allows you to perform common operations

const fruits: string[] = ["Apple", "Banana", "Orange"];

//a) Adding element to an array using push

const newFruitsArray = fruits.push("PineApple");
console.log(newFruitsArray);

//b) Removing elemnt from an array using pop

const lastElement = fruits.pop();
console.log(lastElement);

//! Iterating over arrays
//? You can iterate over the elements of array using various looping constructs such as 
// for, for ... of, or array methods like forEach.

// Using for loop
for (let i =0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// Using for ... of loop
for (const fruit of fruits) {
    console.log(fruit);
}

// Using forEach method
fruits.forEach((currValue) => console.log(currValue))
