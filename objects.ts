// ( interfaces in typescript )
interface user {
    id?: string;
    name: string;
    age: number;
    greet():void
}

let obj : user = {
    id: "U001",
    name : "Gourav",
    age : 25,
    greet(){
        console.log("Hello")
    }
}

obj.greet();

interface MathOp {
    ( a:number, b:number )  : number
}

const add : MathOp = (x,y) => x + y
const sub : MathOp = (x,y) => x - y

console.log("add: ", add(1,2));
console.log("sub: ", sub(1,2));


// recursion via type alias
type Tree = {
    value:string,
    children?:Tree[]
}

let tree : Tree = {
    value: "Bajrang Lal",
    children:[
        {
            value:"KanhaiyaLal",
            children:[
                {
                    value:"Gourav",
                    children:[]
                }
            ]
        }
    ]
}

console.log("tree: ",tree)
console.log("tree.value: ",tree.children)