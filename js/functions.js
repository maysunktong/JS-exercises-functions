// Don't touch this array
let names = ["Alex", "Sam", "John", "Lucia", "Marco", "Kristina"];

// Your code here


// exercise 1
// function exercise1() {
//   console.log("Hi! My name is Alex");
// }
// exercise1();

// exercise 2
// let namePrint = (name) => {
//   return `Hi! My name is ${name}`;
// };
// console.log(namePrint("Alex"));

// exercise 3
// let namePrint = (name = "Alex") => {
//   return `Hi! My name is ${name}`;
// };
// console.log(namePrint());

// exercise 4
// let fullName = (name = "Alex", lastName) => {
//   return `Hi! My name is ${name} ${lastName}`;
// };
// console.log(fullName("May", "Meow"));

// exercise 5
// let fullName = (name = "Alex", lastName = `${name}sson`) => {
//   return `Hi! My name is ${name} ${lastName}`;
// };
// console.log(fullName());

// exercise 6
// let addParagraph = () => {
//   let exercise6 = document.getElementById("exercise6");
//   let newParagraph = document.createElement("p");
//   newParagraph.textContent = "Here I am!";
//   newParagraph.className = "answer_color";
//   exercise6.appendChild(newParagraph);
// }
// addParagraph();

// exercise 7
// let addParagraph = (targetedID, text) => {
//   let targetedDiv = document.getElementById(targetedID);
//   let newParagraph = document.createElement("p");
//   newParagraph.textContent = text;
//   newParagraph.className = "answer_color";
//   targetedDiv.appendChild(newParagraph);
// }
// addParagraph("exercise7", "Here I am!");

// exercise 8 (run exercise 5 first)
// addParagraph("exercise8", fullName("May", "Yeah"));
// addParagraph("exercise8", fullName("May"));
// addParagraph("exercise8", fullName());

// exercise 9 
// names.forEach(name => console.log(name));

// exercise 10 (run exercise 2 first)
// names.forEach(namePrint => {
//   console.log(`Hi! My name is ${namePrint}`);
// });

// exercise 11
