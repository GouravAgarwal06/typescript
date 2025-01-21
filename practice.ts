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