console.log('hello world from typscript')

// Core Types.
/*
1. Number
2. String
3. Boolean
4.object
5. array -> there could by string|number, or number or string type of array depends on what type of data you storing inside the array. same for obj.
6. Tuple // fixed length array with value of fixed type
7. enum -> if you want to have some global variable that is constant, like role admind = 0, superAdmin = 1; then you can use enum, syntax enum {admin, superAdmin} note: admin will automatically set to 0 as default, and super addmin and if you have another value that it will be previous value + 1.

8. Any -> not that usefull, this typ can have any type.
*/

const add = (num1: number, num2: number, notice: string, bool: boolean) => {
    if(bool) return num1 + num2;
    return
}

const n1 = 5;
const n2 = 6;
const bool = true;

add(n1, n2, 'addition is completed', bool)


// simple types.------

let firstName = 'James'
// firstName = 33; this throws error.


const strArr: readonly string[] = ['James']
// strArr.push('Bond') this throws error.

const numArr = [1, 2, 3]
// numArr.push('Hello') this also throws error.


// tuples.
let  myTuple : readonly [number, string, boolean]
// myTuple.push('hlleo0') this will not work if the tuple is readonly if not it works.
myTuple = [5, 'hello', true]

const tuple = [5, 'hello', true]
console.log(myTuple)

// function and callback

const addition = (a : number, b: number) => {
    return a + b
}
const concat = (a:string, b:string) => {
    return a + b
}

let addTwo = addition;
addTwo(5, 3)

const logger = (a: number, b:number, cb: (a: number, b: number) => number) => {
    let res = cb(a, b)
    console.log(res)
}

logger(5, 9, addTwo)