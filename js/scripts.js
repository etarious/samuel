// alert("This page is busy!");
// let cons = confirm("Do you want to proceed?");
// console.log(cons);

// let pass = prompt("Enter password:");
// console.log(pass);


let residence = "Abia";
const stateOfOrigin = "Delta";
console.log(residence + ", " + stateOfOrigin);

residence = "Lagos";
// stateOfOrigin = "Imo";

console.log(typeof residence + ", " + typeof stateOfOrigin);


// Strings...
let samuel = 'This "boy" is crazy';
console.log(samuel);

// Numbers...
let age = 23;
let ge = "23";

console.log(typeof age + ", " + typeof ge);
console.log(age === ge);


// Boolean...
let male = true;
console.log(typeof male);

// Arrays...
let fruits = ["Apple", "Mango","Date"];
let states = Array("Lagos", "Kano", "Delta", "Taraba", "Ogun");


console.log(states[states.length - 1]);


// ### Operators...
/**
 * Arithmetic Operators
 * Ternary Operators
 * Assignment Operators
 * Comparison Operators
*/

// Arithmetic Operators...
x = 3;
x += 2;

console.log(x);




// Conditional Statements...

let rainy = confirm("Rainy?");
let sunny = confirm("Sunny?");

if (rainy || sunny) {
    alert("Don't go out");
}else{
    alert("Go out");
}


// if (sunny) {
//     alert("Dont' go out");
// } else {
//     alert("Go out");
// }
