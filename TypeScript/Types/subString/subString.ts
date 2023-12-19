/** Substring:
Declare a variable longText of type string and assign it a long sentence. Extract the first 10 
characters from longText and store them in a variable called shortText
*/

let longText: string = "Welcome to TypeScript!!!";
let shortText: string = longText.slice(0, 10);
console.log('Trimmed Text: ', shortText);