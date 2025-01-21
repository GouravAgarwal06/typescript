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


// any type ( it is different from unknown as it provides error at run time)
let anyData: any;

anyData = "Hello";       // No error
console.log("string any anyData: ", anyData);     // Output: Hello

anyData = 42;            // No error
console.log("number any anyData: ", anyData);     // Output: 42

// console.log(anyData.toUpperCase());  // ( this line provide error during run time)


// ( unknown type ) ( this provide error during compile time)
let unknownData: unknown;

unknownData = "Hello";       // No error
console.log("string unknown unknownData: ", unknownData);     // Output: Hello

unknownData = 42;            // No error
console.log("number unknown unknownData: ", unknownData);     // Output: 42   

if (typeof unknownData === "string") {
    console.log(unknownData.toUpperCase());
}

// console.log(unknownData.toUpperCase());  //( this line provide error during compile time)

// array type

let numArr2: number[] = [1, 2, 3, 4, 5];
let chatArr2: string[] = ["a", "b", "c"];


// tuples

let tupleData: [string, number] = ["Gourav", 25];

let coordinates: [number, number,number] = [10, 20,30];  // ( x, y, z )

// localhost:3000?name=Gourav&age=25
let query: [string, number] = ["Gourav", 25];

let response : [number, string] = [200, "SUCCESS"]; // http-response

// tuples drawbacks or flaws
response.push("Gourav");

console.log("response: ", response);


//enum
enum Color {
    Red = 1,
    Green,
    Blue,
}

let color : Color = Color.Green;
console.log("color: ", color);

const enum Size {
    Small = 1,
    Medium,
    Large,
}

let size : Size = Size.Medium;
console.log("size: ", size);


// never type
function infinite() : never {
    while(true){
        console.log("Hello World");
    }
}


function throwError(message: string) : never {
    throw new Error(message);
}

// ( void type)
function logMessage(message: string): void {
    console.log(message);   
    return
}

logMessage("Hello");


// ( union  type )
let unionMessage: string | number = "Gourav";
console.log("hello world unionMessage", unionMessage);
unionMessage = 1234;
console.log("hello world unionMessage", unionMessage);


// ( practical example of void type and never type )
function processInput(input : string | number) : void | never{
    if(typeof input === "string"){
        console.log(input.toUpperCase());
    }else if(typeof input === "number"){
        throw new Error("Input is a number and it is not valid");
    }    
}

processInput("Gourav");








