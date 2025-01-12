"use strict";
// type inference ( automatically set type string)
let message1 = "Gourav";
console.log("hello world ", message1);
// message = 1234   ( this provide error )
// ( any type ) ( it is different from unknown as it provides error at run time)
let data1;
data1 = "Hello"; // No error
console.log("string any data1: ", data1); // Output: Hello
data1 = 42; // No error
console.log("number any data1: ", data1); // Output: 42
// console.log(data.toUpperCase());  ( this line provide error during run time)
// ( unknown type ) ( this provide error during compile time)
let data2;
data2 = "Hello"; // No error
console.log("string unknown data2: ", data2); // Output: Hello
data2 = 42; // No error
console.log("number unknown data2: ", data2); // Output: 42   
if (typeof data2 === "string") {
    console.log(data2.toUpperCase());
}
// console.log(data2.toUpperCase()); ( this line provide error during compile time)
// ( union  type )
let message3 = "Gourav";
console.log("hello world union string ", message3);
message3 = 1234;
console.log("hello world union number", message3);
// ( void type)
function logMessage(message) {
    console.log(message);
    return;
}
logMessage("Hello");
// ( practical example of void type and never type )
function processInput(input) {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
    else if (typeof input === "number") {
        throw new Error("Input is a number and it is not valid");
    }
}
processInput("Gourav");
console.log("hello world");
// ( rest paramenters in function )
function total(...numbers) {
    return numbers.reduce((prev, current) => prev + current, 0);
}
console.log(total(1, 2, 3, 4, 5));
// ( define the function parameter and return type )
let calculate;
calculate = (a, b) => a + b;
console.log(calculate(1, 2));
// ( arrow function )
let multiply = (x, y) => x * y;
console.log(multiply(2, 3));
let user = {
    id: "U001",
    name: "Gourav",
    age: 25,
};
console.log(user);
