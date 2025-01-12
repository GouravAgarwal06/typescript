// type inference ( automatically set type string)
let message1 = "Gourav"
console.log("message1", message1);

// basics types
let num: number = 10;
console.log("num: ", num);

let bigNum: bigint = 12345678968574657685n;
console.log("bigNum: ", bigNum);

let char: string = "Gourav";
console.log("char: ", char);

let bool: boolean = true;
console.log("bool: ", bool);

let notDefined: undefined = undefined;
console.log("notDefined: ", notDefined);

let empty: null = null;
console.log("empty: ", empty);

let numArr: number[] = [1, 2, 3, 4, 5];
console.log("numArr: ", numArr);

let charArr: string[] = ["a", "b", "c"];
console.log("charArr: ", charArr);

let objData: object = { id: "U001", name: "Gourav", age: 25 };
console.log("objData: ", objData);

let objData2: { id: string, name: string} = {
    id: "U001",
    name: "Gourav",
};

objData2 = {...objData2, name:"Rahul"}

console.log("objData2: ", objData2);

// message = 1234   ( this provide error )

// ( any type ) ( it is different from unknown as it provides error at run time)
// let data1: any;

// data1 = "Hello";       // No error
// console.log("string any data1: ", data1);     // Output: Hello

// data1 = 42;            // No error
// console.log("number any data1: ", data1);     // Output: 42

// // console.log(data.toUpperCase());  ( this line provide error during run time)


// // ( unknown type ) ( this provide error during compile time)
// let data2: unknown;

// data2 = "Hello";       // No error
// console.log("string unknown data2: ", data2);     // Output: Hello

// data2 = 42;            // No error
// console.log("number unknown data2: ", data2);     // Output: 42   

// if (typeof data2 === "string") {
//     console.log(data2.toUpperCase());
// }
// // console.log(data2.toUpperCase()); ( this line provide error during compile time)


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




