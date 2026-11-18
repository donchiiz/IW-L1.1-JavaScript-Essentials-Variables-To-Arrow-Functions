console.log("JS is connected!")

// Fundamental data types
const studentsID = 123456789; //constants dont change
let firstName = "Doni"
let age = "17"
let year = "senior"
let isStudent = true;
let gpa = 4.0;
let major = undefined;

console.log(firstName, age);
// Reassignment (no let)

age = 18;
age = age + 1;
age += 1;
console.log(age);

// Essential Operations
age + 10;
age - 10;
age * 2;
age / 2;

// Additional operations
console.log(Math.round(3.7)); //rounds 
console.log(Math.floor(5.8)); //rounds down
console.log(Math.ceil(5.2)); //rounds up



// Concatenation v. templates
//mr k doesnt like
let string1 = firstName + " is " + age + " years old.";

//mr k perfers
let string2 = `${firstName} is ${age} years old.`;
//back tick


console.log(string1);
console.log(string2);

// String methods
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.includes("Doni"));

// Comparison operators - true or false?
age == 10;
"42" == 42;
age > 18

// Conditional statements;

let username = "Doni";
let age2 = 17

if (username == "Doni" && age2 >= 17) {
  console.log("Welcome back, Doni!");
} else {
  console.log("Who are you?");
}

// functions

// Returns half the number if it can be halved; otherwise returns false
function getHalf(x) {
  if (x % 2 === 0) {
    return x / 2;
    } else {
        return false;
    }
}

a = getHalf(10);
console.log(a);

// Functions can also be written as arrows. Body of function doesn't change, just the signature.
//reccomended to use arrow functions
const getHalfArrow = (x) => {
    const getHalf2 = (x) => {
        if (x % 2 === 0) {
            return x / 2;
        } else {
            return false;
        }
}
}


///practice

//doubling function
function double(x) {
    return x * 2;
}

console.log(double(5));

//with arrow instead 

const double2 = (x) => {
    return x * 2;
}

console.log(double2(5));


///likely a verb funtction, ends in ing, likely a verb

function likelyVerbToCheck(x) {
    if(x.includes("ing")){
        return true;
    } else {
        return false;
    }
};

console.log(likelyVerbToCheck("running"));
console.log(likelyVerbToCheck("run"));
console.log(likelyVerbToCheck("blingy"));

const likelyVerb2 = (x) => {
    if(x.includes("ing")){
        return true;
    } else {
        return false;
    }
}
