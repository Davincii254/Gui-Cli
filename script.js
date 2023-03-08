// Array methods
// Push
// const sports = ["soccer", "baseball"];
// const total = sports.push("football", "swimming");

// console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
// console.log(total); // 4



// Pop
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const popped = myFish.pop();

// console.log(myFish); // ['angel', 'clown', 'mandarin' ]
// console.log(popped); // 'sturgeon'


// Shift
// const myFish = ["angel", "clown", "mandarin", "surgeon"];

// console.log("myFish before:", JSON.stringify(myFish));
// // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

// const shifted = myFish.shift();

// console.log("myFish after:", myFish);
// // myFish after: ['clown', 'mandarin', 'surgeon']

// console.log("Removed this element:", shifted);
// // Removed this element: angel




// Slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']



// Splice
// Remove 0 (zero) elements before index 2, and insert "drum"
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed



// delete
// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];
// console.log(3 in trees); // false




// Objects
// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//       console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//       console.log(`Hi! I'm ${this.name[0]}.`);
//     },
//   };

// person.name;
// person.name[0];
// person.age;
// person.bio();
// person.introduceSelf();






// .this
// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
  
//   const person2 = {
//     name: "Deepti",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };

// person1.introduceSelf()  outputs "Hi! I'm Chris.";
// person2.introduceSelf() on the other hand outputs "Hi! I'm Deepti." even though the method's code is exactly the same in each case




// submit
// html
//  <form id="form">
//   <label>Test field: <input type="text" /></label>
//   <br /><br />
//   <button type="submit">Submit form</button>
// </form>
// <p id="log"></p> //


// js
// function logSubmit(event) {
//     log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
//     event.preventDefault();
//   }
  
//   const form = document.getElementById("form");
//   const log = document.getElementById("log");
//   form.addEventListener("submit", logSubmit);
  
