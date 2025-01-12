// ( alias for array)
type StringArray = string[];
type NumberArray = number[];

let message: StringArray = ["Alice", "Bob", "Charlie"];
let data: NumberArray = [1, 2, 3, 4];

console.log(message);
console.log(data);


// ( alias for objects )
type account = {
    id : string,
    name : string,
    age : number
}

let person : account = {
    id : "U001",
    name : "Gourav",
    age : 25
}

console.log(person)