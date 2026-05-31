// // Welcome to your TypeScript project!
// // You can run this file in development using: npm run dev
// // You can build this project using: npm run build

// const greeting: string = "Hello, TypeScript with Node.js!";
// console.log(greeting);

// // Example of typed object
// interface User {
//   id: number;
//   name: string;
//   role: string;
// }

// const user: User = {
//   id: 1,
//   name: "Developer",
//   role: "Admin"
// };

// console.log("Current user:", user);

function greet(firstName: string){
  console.log("hello" + firstName);
}

function isLegal(age: number): boolean{
  if(age >= 18){
    return true;
  } else {return false;}
}

console.log(isLegal(21));

function delayedCall(fn: ()=> void){
  setTimeout(fn, 1000);
}
function fn(){
  console.log("im called after one second ")
}