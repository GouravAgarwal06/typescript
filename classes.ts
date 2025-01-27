class Person {
    name:string;
    age:number;
    email:string;

    constructor(naam:string, umar:number,email?:string){ 
        this.name = naam
        this.age = umar
        this.email = email || "no email"
    }

    greet():string{
        return `Hello ${this.name} and your age is ${this.age} and your email is ${this.email}`
    }
}

const person1 = new Person("Gourav", 25, "gka98963@gmail.com")

console.log(person1)
console.log(person1.greet())

/* access modifiers (public,private,protected)
    public = access from anywhere it is default 
    private = access with in the class
    protected = access with in the class or its sub classess
*/
class Car1{
    private brand:string;
    model:string;
    protected year:number;

    constructor(brand:string, model:string, year:number){
        this.brand = brand
        this.model = model
        this.year = year
    }

    getBrand():string{
        return this.brand
    }

    getYear():number{
        return this.year
    }
}

const car1 = new Car1("Honda", "Civic", 2020)

console.log(car1.getBrand())

// inheritance
class Animal{
    constructor(public name:string){}

    makeSound():void{
        console.log("some sound")
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }

    makeSound(): void {
        console.log("Bark")
    }
}

const dog1 = new Dog("Rex")

dog1.makeSound()

// abstract class
abstract class Shape{
    abstract getArea():number;

    printArea():void{
        console.log(`Area is ${this.getArea()}`)
    }
}

class Rectangle extends Shape{
    constructor(private width:number, private height:number){
        super()
    }

    getArea(): number {
        return this.width * this.height
    }
}

const rectangle1 = new Rectangle(10,20)
console.log(rectangle1.getArea())
rectangle1.printArea()

//setters and getters
class Circle{
    private _radius:number;

    constructor(radius:number){
        this._radius = radius
    }

    get radius():number{
        return this._radius
    }

    set radius(radius:number){
        if(radius < 0){
            throw new Error("Radius cannot be negative")
        }
        this._radius = radius
    }
}

const circle1 = new Circle(5)
console.log("circle: ",circle1)
console.log(circle1.radius)
circle1.radius = 10
console.log(circle1.radius)

/* question 1 ---->

  create a bank account class : 
    accountNumber : string
    balance : number(private)
    the classes should have methods:
        deposit(amount:number):void 
        withdraw(amount:number):void 
        getBalance():number 

*/

class BankAccount{
    accountNumber:string
    private balance:number

    constructor(accountNumber:string, balance:number){
        this.accountNumber = accountNumber
        this.balance = balance
    }

    deposit(amount:number):void{
        this.balance += amount
    }

    withdraw(amount:number):void{
        if(amount > this.balance){
            throw new Error("Insufficient funds")
        }
        this.balance -= amount     
    }

    getBalance():number{
        return this.balance
    }
}

const account1 = new BankAccount("12345", 1000)
console.log(account1)
account1.deposit(500)
console.log(account1.getBalance())
account1.withdraw(200)
console.log(account1.getBalance())


/* Question 2 ---->

   create an Employee class with Inheritance : 
    Define an Employee class with properties name and salary
    create a subclass manager that adds a department property
    both classes should have a getDetails method that returns a string with the employee's details
*/

class Employee{
    constructor(public name:string,public salary:number) { }

    getDetails():string{
        return `${this.name} has a salary of ${this.salary}`
    }
}

class Manager extends Employee{

    constructor(name:string,salary:number,public department:string){
        super(name,salary)
    }

    getDetails():string{
        return `${this.name} is a manager in ${this.department} and his salary is ${this.salary}`
    }
}

const manager = new Manager("Gourav", 50000, "IT")

console.log("manager: ",manager)
console.log(manager.getDetails())
