function addNumber(x:number, y:number) : number{
    return x + y
}

console.log(addNumber(1,2));

//function overloading
function getLength(value:string):number;
function getLength(value:any[]):number;
function getLength(value:any):number{
    return value.length
}

console.log(getLength("hello"));
console.log(getLength([1,2,3]));



// ( rest paramenters in function )
function total(...numbers:number[]) : number {
    return numbers.reduce( ( prev,current ) => prev + current,0)
}

console.log(total(1,2,3,4,5));

// ( define the function parameter and return type )
let calculate : (x:number,y:number) => number

calculate = (a,b) => a + b

console.log(calculate(1,2));


// ( arrow function )
let multiply = ( x:number,y:number) => x * y

console.log(multiply(2,3));