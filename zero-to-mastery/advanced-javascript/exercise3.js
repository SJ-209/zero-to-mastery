// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// my code //

const a = 'test test2';
let b = true;
let c = 789;

if (c > 788) {
    let b = true;
}

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


// my code //

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};    
   

const { firstName, lastName, eyeColor} = person;
let { age } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// my code //

const a = 'test';
const b = true;
const c = 789;

const okObj
= {
   a,
   b,
   c 
}
// Template strings
const name = "Sally";
const age = 34;
const city = "Leeds";

const message = `Hello ${name} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;

function isValidAge(age=30) {
    return `${age-20}`;
}

// Symbol
// Create a symbol: "This is my first Symbol"

let sym1 = Symbol('poo');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmi = (username, location) => "I am lost" + "I am totally lost";