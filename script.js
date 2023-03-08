typeof 42;
=> "number"

typeof "I am a string.";
=> "string"

typeof true;
=> "boolean"

typeof false;
=> "boolean"

const js = {
    name: "JavaScript",
    createdBy: {
      firstName: "Brendan",
      lastName: "Eich",
    },
    firstReleased: 1995,
    isAwesome: true,
  };
  
typeof {};
//=> "object"
  

  const dogs = ["Byron", "Cubby", "Boo Radley", "Luca"];
typeof dogs;
//=> "object"


let unassignedVariable;
typeof unassignedVariable;
//=> "undefined"




If 
if (condition) {
    // Block of code
  }
const age = 55;

let isAdult;
if (age >= 18) {
  isAdult = true;
}

isAdult;




ELSE
const age = 14;

let isAdult;

if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

isAdult;





 Else if
const age = 20;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 21) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
  canDrink = true;
} else if (age >= 18) {
  canWork = true;
  canEnlist = true;
  isAdult = true;
} else if (age >= 16) {
  canWork = true;
}

canWork;




Nested IF
const age = 17;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

canWork;

console.log(canWork, canEnlist, isAdult, canDrink);


While
while (condition expression) {
    // stuff to do
   }


Do while
do {
    console.log(`I will execute once`);
  } while (false);

Console  log
var a = 2;
console.log("The value of a is " + a);



