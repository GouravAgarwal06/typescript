"use strict";
// type inference ( automatically set type string)
let message1 = "Gourav";
console.log("message1", message1);
// basics types
let num = 10;
console.log("num: ", num);
let bigNum = 12345678968574657685n;
console.log("bigNum: ", bigNum);
let char = "Gourav";
console.log("char: ", char);
let bool = true;
console.log("bool: ", bool);
let notDefined = undefined;
console.log("notDefined: ", notDefined);
let empty = null;
console.log("empty: ", empty);
let numArr = [1, 2, 3, 4, 5];
console.log("numArr: ", numArr);
let charArr = ["a", "b", "c"];
console.log("charArr: ", charArr);
let objData = { id: "U001", name: "Gourav", age: 25 };
console.log("objData: ", objData);
let objData2 = {
    id: "U001",
    name: "Gourav",
};
objData2 = { ...objData2, name: "Rahul" };
console.log("objData2: ", objData2);
// any type ( it is different from unknown as it provides error at run time)
let anyData;
anyData = "Hello"; // No error
console.log("string any anyData: ", anyData); // Output: Hello
anyData = 42; // No error
console.log("number any anyData: ", anyData); // Output: 42
console.log(anyData.toUpperCase()); // ( this line provide error during run time)
// ( unknown type ) ( this provide error during compile time)
let unknownData;
unknownData = "Hello"; // No error
console.log("string unknown unknownData: ", unknownData); // Output: Hello
unknownData = 42; // No error
console.log("number unknown unknownData: ", unknownData); // Output: 42   
if (typeof unknownData === "string") {
    console.log(unknownData.toUpperCase());
}
// console.log(unknownData.toUpperCase());  //( this line provide error during compile time)
// array type
let numArr2 = [1, 2, 3, 4, 5];
let chatArr2 = ["a", "b", "c"];
let value = numArr2.forEach((num) => num * 2);
console.log("value: ", value);
// // ( union  type )
// let message3: string | number = "Gourav";
// console.log("hello world union string ", message3);
// message3 = 1234;
// console.log("hello world union number", message3);
// // ( void type)
// function logMessage(message: string): void {
//     console.log(message);   
//     return
// }
// logMessage("Hello");
// // ( practical example of void type and never type )
// function processInput(input : string | number) : void | never{
//     if(typeof input === "string"){
//         console.log(input.toUpperCase());
//     }else if(typeof input === "number"){
//         throw new Error("Input is a number and it is not valid");
//     }    
// }
// processInput("Gourav")
// console.log("hello world");
// // ( rest paramenters in function )
// function total(...numbers:number[]) : number {
//     return numbers.reduce( ( prev,current ) => prev + current,0)
// }
// console.log(total(1,2,3,4,5));
// // ( define the function parameter and return type )
// let calculate : (x:number,y:number) => number
// calculate = (a,b) => a + b
// console.log(calculate(1,2));
// // ( arrow function )
// let multiply = ( x:number,y:number) => x * y
// console.log(multiply(2,3));
// // ( type alias )
// type User = {
//     id: string;
//     name: string;
//     age: number;
// };
// let user: User = {
//     id: "U001",
//     name: "Gourav",
//     age: 25,
// };
// console.log(user);
