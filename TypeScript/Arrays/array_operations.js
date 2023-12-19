//* Arrays in TypeScript come with built-in methods that allows you to perform common operations
var fruits = ["Apple", "Banana", "Orange"];
//a) Adding element to an array using push
var newFruitsArray = fruits.push("PineApple");
console.log(newFruitsArray);
//b) Removing elemnt from an array using pop
var lastElement = fruits.pop();
console.log(lastElement);
//! Iterating over arrays
//? You can iterate over the elements of array using various looping constructs such as 
// for, for ... of, or array methods like forEach.
// Using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
