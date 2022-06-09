// Add Two numbers using Functions
let no1 = 45;
let no2 = 2456;

// // Function Declaration
// function addNo() {
//   let result = no1 + no2;
//   console.log(result);
// }
// addNo();

// // Function Expressions (Named Function Expression)
// // Using Function Name to create new variable for Function
// const addNo = function addNo() {
//   let result = no1 + no2;
//   console.log(result);
// };
// addNo();

// //Anonymous Function Expression
// const addNo = () => {
//   let result = no1 + no2;
//   console.log(result);
// };
// addNo();

const addNo = new Function("console.log(no1+no2)");
addNo();
