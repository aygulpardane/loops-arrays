/* Only odds pseudocode

Create an array named 'input'
Create an array for the results, named 'output'
Make a for loop that goes through each index starting at 0
for (let i = 0; i < input.length; i++)
Inside an if condition:
At each index, which is a number, check to see if it's even or odd
To check that, use the % (modulus) operator - (example: 2 % 2) if we get 0, it's even; if we get 1, it's odd
If it's odd, push the number to the 'output' array
Outside the loop, console.log the 'output' array

*/

const input = [2, 4, 6, 8, 10, 11, 12];
const output = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 1) {
        output.push(input[i]);
    }
}

console.log(output);

/* Vowel vs. consonant pseudocode

Define a variable vowel = 0 and consonant = 0
Define a variable string = ""
Write a for loop with an if condition
Inside the for loop, start at i = 0 and i < string.length, with i++
At each iteration, check to see if the letter at index i is a vowel, using an if/else
If string[i] === "a", then vowel++
else if string[i] === "e", then vowel++
.
.
.
else, consonant++
then console.log(string + " has " + consonant + " consonants and " + vowel + " vowels")

*/

let vowel = 0;
let consonant = 0;
let string = "hello";

for (i = 0; i < string.length; i++) {
    if (string[i] === "a") {
        vowel++;
    } else if (string[i] === "e") {
        vowel++;
    } else if (string[i] === "i") {
        vowel++;
    } else if (string[i] === "o") {
        vowel++;
    } else if (string[i] === "u") {
        vowel++;
    } else {
        consonant++;
    }
}

console.log(string + " has " + consonant + " consonants and " + vowel + " vowels");

/* Reverse array pseudocode

Create an array named oldArray = []
Create an array named newArray = []
In a for loop, start from the end and iterate until the 0th index until i is >= 0
i = oldArray.length-1, i >= 0, i--
Add oldArray[i] to newArray - newArray.push(oldArray[i])
console.log(newArray)

*/

const oldArray = [1, 3, 5, 7, 9, 11];
const newArray = [];

for (i = oldArray.length-1; i >= 0; i--) {
    newArray.push(oldArray[i]);
}

console.log(newArray);

/* FizzBuzz pseudocode

Create a variable named fizzBuzz = 0
In a for loop, start from 0 and iterate until i<=100
If the number % 3 === 0, then console.log("Fizz")
If the number % 5 === 0, then console.log("Buzz")
If the number % 3 === 0 AND % 5 === 0, then console.log("FizzBuzz")
Else, print fizzBuzz[i]

*/

for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
