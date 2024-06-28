// 1. user defined callback function banao calculator jo a, b, c and konsa function run karwana hai wo chaleyega, add, subtract, multiply divide
// function calculator (a, b, oprations) {
//     return oprations(a, b);
// }

// function sum (a, b) {
//     return a + b;

// }
// function sub (a, b) {
//     return a - b;
// }
// function multipication (a, b) {
//     return a * b;
// }
// function devide (a, b) {
//     return a / b;
// }
// console.log(calculator(3, 5, sum));
// console.log(calculator(5, 8, sub));
// console.log(calculator(8, 12, multipication));
// console.log(calculator(12, 20, devide));



// 2. user defined function masterfunction banna hai jo 1 information leti hai out of username, age, rollno, aur ek function as an argument leti hai, print name mai agar username and printname function bheja gaya ho, age, printage, rollno, printrollno


function masterFunction (info, func) {
    return func(info);
}


function printName (name) {
    console.log("name: ${Aman} ");
}

function printAge (age) {
    console.log("age: ${25 }");
}

function printRollNo (rollNo) {
    console.log("Roll: ${12345 }");
}

const user = {
    username: 'Aman',
    age: 25,
    rollNo: 12345
}

masterFunction(user, printName);
masterFunction(user, printAge);
masterFunction(user, printRollNo);
