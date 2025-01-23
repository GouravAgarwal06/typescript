// 1. write a program to print factorial of a number 
function factorial( x: number) : number {
    // let initial:number = 1;

    // for(let i = 1; i <= x; i++){
    //     initial = initial * i;
    // }

    // return initial
    if(x==0 || x==1) return 1;
    return x * factorial(x-1)
}
console.log(factorial(5));

// 2. define a function that accepts a user object (with name,age,email) and returns a formatted string

interface UserData{
    name:string
    age:number
    email:string
}

function formatString(user:UserData):string {
    return `${user.name} is ${user.age} years old and its email is ${user.email}`
}

const user1 : UserData = {
    name:"Gourav",
    age:25,
    email:"gka98963@gmail.com"
}

console.log(formatString(user1))

/* 3. calculate total price : write a Typesript function that 
   calculates the total price of an array of product objects
   each product has a price and quantity
*/

interface Product {
    price:number
    quantity:number
}

function calculatePrice(products:Product[]):number {
    return products.reduce((total,product) => total + product.price * product.quantity,0)
}

const cart:Product[] = [
    {price:100, quantity:1},
    {price:200,quantity:2}
]

console.log(calculatePrice(cart))


/* 4. Define a union type for a Vehicle that can either
    be a Car or Bike with different properties.
    Write a function to log details based on the vehicle type 
*/

type Bike = {
    type: 'bike'
    brand:string,
    cc:number
}

type Car = {
    type: 'car'
    modal:string,
    make:string,
    year:number
}

type Vehicle = Bike | Car

function getVehicleData(vehicle:Vehicle): void{
    if(vehicle.type === 'car'){
        console.log("it is a car")
    }else if(vehicle.type === 'bike'){
        console.log("it is a bike")
    }else{
        console.log("neither bike nor car")
    }
}

const vehicleData : Vehicle = {
    type:'car',
    modal:'Modal 10',
    make:"Tesla",
    year:2024
}

getVehicleData(vehicleData)