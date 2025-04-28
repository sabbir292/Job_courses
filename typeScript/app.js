console.log('hello world from typscript');
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
var add = function (num1, num2, notice, bool) {
    if (bool)
        return num1 + num2;
    return;
};
var n1 = 5;
var n2 = 6;
var bool = true;
add(n1, n2, 'addition is completed', bool);
// simple types.------
var firstName = 'James';
// firstName = 33; this throws error.
var strArr = ['James'];
// strArr.push('Bond') this throws error.
var numArr = [1, 2, 3];
// numArr.push('Hello') this also throws error.
// tuples.
var myTuple;
// myTuple.push('hlleo0') this will not work if the tuple is readonly if not it works.
myTuple = [5, 'hello', true];
var tuple = [5, 'hello', true];
console.log(myTuple);
// function and callback
var addition = function (a, b) {
    return a + b;
};
var concat = function (a, b) {
    return a + b;
};
var addTwo = addition;
addTwo(5, 3);
var logger = function (a, b, cb) {
    var res = cb(a, b);
    console.log(res);
};
logger(5, 9, addTwo);
