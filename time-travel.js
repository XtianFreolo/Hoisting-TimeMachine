/* Task 1: Declare a Destination Variable */

let destination = Ancient Egypt;
console.log(`Destination: ${destination}`);

// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.



/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.


let destination = "Medieval Europe";
console.log(`New destination: ${destination}`);


/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = "2024-03-15";
console.log(`Travel Date: ${travelDate}`);


/*
 * Observations:
 * TODO: Explain here.
 // cannot be changed, its a const 

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";


/* Observations:
 * TODO: Explain here.
 */
//its undefined. because of hoisting, the variable is declared but not initialized yet.