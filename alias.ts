// ( alias for array)
type StringArray = string[];
type NumberArray = number[];

let strArr: StringArray = ["Alice", "Bob", "Charlie"];
let numberArr: NumberArray = [1, 2, 3, 4];

console.log("strArr: ",strArr);
console.log("numberArr: ",numberArr);



// ( type alias )
type student_Name = string;
let student : student_Name = "Gourav";

console.log("student: ", student);

type User = {
    id: string;
    name: string;
    age: number;
};

let user: User = {
    id: "U001",
    name: "Gourav",
    age: 25,
};

console.log("user: ",user);

type Status = "active" | "inactive" | "suspended";

let accountStatus: Status = "active"; // Only these strings are allowed


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