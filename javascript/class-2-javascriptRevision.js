//type of veriale declaration
//1.let
//const
//var
//let and const block scoped
//wo sirf eak block tak he semit hai if ho ya for ho
//var is a function scoped throughout the function

//yaha function scoped ka matlab hai ke pure function mai veriable ki scope rahegi usme agr if bhi a jaye to sirf us block mai veriable defined hoga

//example
{
    let a = 10;
    console.log(a);
}
console.log(a);

// here a is not define outside the block

{
    var b = 20;
    console.log(b);
}
console.log(b);
//here b is defined outside the block becouse var is function scoped

// kise na kise ne ek function ko hide kiya hua hai
// agar hamny eak function define kiya hai to us function ke andar var ka scop rhega
//function lower level meaning hota hai stack
//there are two  types of stack in javascript //
// 1 main stack
//2 side stack


// main stack me humny ek function define kiya hai
//main pura body hai usme side stack function khelata hai

//hoisting:is udhari ka consept
//javascript mai humne ek veriable declace kiya hai to us variable ko uper lejata hai

// veriable ko declare kiye bina usko use kar lena hi hoisting ka concept hai

// example

console.log(c);
var c = 30;

// here c is undifined becouse it is hoisted to the top of the script
a(); //function hoisting

var a = () => {
    console.log(b); //veriable hoisting
}
var b = 20;

// types of function colling in javascript
// 1 function declaration or named function
//2 function expresion
// 3 immidiatly invoked function expression(IIFE)
//4 arrow function
//5 function custructor
//6 annoniomus function


// 1 function declaration

// example

// function add(a,b)
// {
//     return a + b;
// }
// console.log((10, 20));

//2 function expresion me types hai

// a) using var

//  function(a, b) {
//     return a + b;
// };
var add = function (a, b) {
    return a + b;
};
add(); // add is reference to the that annoniomous function

// b) using let

let add = function (a, b) {
    return a - b;

};
//let can be reassign but not redeclaire
add(3, 5)
const add = function (a, b) {
    return a - b;
};
add(3, 5);
// const can not be redeclare or reasign


//arrow function
//a)using bar
var add = (a, b) => {
    return (a + b);
}
add(3, 5);
//a)using let
let add = (a, b) => {
    return (a + b);
}
add(3, 5);
//a)using const
const add = (a, b) => {
    return (a + b);
}
add(3, 5);


// immediatly invoked function(IIFE)

var result = (function (a, b) {
    return a + b;
})(3, 5);
console.log(result);
//using let

let result = ((a, b) => {
    return a + b;
})(2, 5);
console.log(result);
//using const

const result = ((a, b) => {
    return a * b;

})(4, 7);
console.log(result);


//4. function cunstructer
// what is cunstroctor
//a cunstroctur is  a special method that is aoutomaticlly called when an object is created from a class
//to initialize the object
//default cunstructor paramterised cunstructor and copy cunstrocter
// example

//default cunstructor
function add () {
    this.a = 3;
    this.b = 5;
    this.result = function () {
        return this.a + this.b;
    };
}
add();

// paramterised cunstructor

function sub (a, b) {
    this.a = 3;
    this.b = 5;
    this.result = function () {
        return this.a + this.b;
    };
}
sub();