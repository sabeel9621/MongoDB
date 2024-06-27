
//arguments? inputs are the besiacally arguments
// 1.postional arguments=> calling ke time pr jyse argument pass kregy bysa he output ayga

// function greet (name, age) {
//     console.log(`Hello my name is ${name} and my age is ${age}`);
// }
// greet(27, "prajjal"); //calling

// 2.default arguments
// function greet (name = "prajjal", age = 27) {
//     console.log(`Hello my name is ${name} and my age is ${age}`);
// }
// greet();

// 3.Rest Paramters ===>application react mai ...prev jab useState padhenge
// eak se zayada argument pass kra  sakty hi or bo usko array ke format me treet krega  agr array ke format me treet kar rha hai to array ke jitne bhi mathods hai lga sakty hai
// function sum (...prajjal) {
//     let sum = 0;
//     prajjal.forEach((element) => {
//         sum += element;
//         // console.log(element);
//     });
//     return sum;
// }
// console.log(sum(3.5, 4.5, 5.5, 6.5, 7.5, 8.9, 9.3));
//rest parameters ka consept  tab ata ek hi category ki value ho jaise sum karte wakt sabhi values numbers hi hote
//numbers , fruits ===>array ka ki dusra takira

// 4.Object destructing ===> express mai = req.body se information object destructure karte wakt
//  ya react mai props(object) pass karte samay iska use dekha jayega

// function greet({ name = "kailash", age = 27 }={}) {
//   console.log(`Hello my name is ${name} and my age is ${age}`);
// }
// greet({age:25,name:"alice"});//argument jo pass ho rahi hai wo ek object

// 5. object destructing in function

// function greet({name,age})
// {
//     console.log(`Hello my name is ${name} and my age is ${age}`);
// }

// function greet ({ name, age }) {
//     console.log(`hello from ${name} and my age is ${age}`);
// }

// const person = {
//     name: "prajjal",
//     age: 27,
// };

// greet(person);



// object litrels====================================
//=====================================================
//=====================================================

// In JavaScript, both the rest and spread operators use the same syntax(...).However, they are used in different contexts and serve different purposes.Rest Operator
// The rest operator allows you to represent an indefinite number of arguments as an array.It is used in function parameter definitions and destructuring assignments to collect remaining elements.Usage in Function Parameters
// The rest operator can be used to gather all remaining arguments of a function into an array.

// function sum (...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

// Usage in Destructuring

// The rest operator can also be used to collect the remaining elements of an array or properties of an object into a new array or object.




//     const[first, second, ...rest] =[1, 2, 3, 4, 5];
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]



// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(rest); // Output: {c: 3, d: 4}

// Spread Operator
// The spread operator allows you to expand elements of an array or object into individual elements.It is used to spread elements in function calls, array literals, or object literals.
// Usage in Function Calls
// The spread operator can be used to pass elements of an array as arguments to a function.

// const numbers = [1, 2, 3, 4];
// console.log(Math.max(...numbers)); // Output: 4

// Usage in Array Literals
// The spread operator can be used to create a new array by spreading elements of an existing array.

// 1) const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); // Output: [1, 2, 3, 4, 5]


// 2) function multiply (a, b, c) {
//     return a * b * c;
// }

// const numbers = [2, 3, 4];
// const result = multiply(...numbers);
// console.log(result); // Output: 24
// Usage in Object Literals
// The spread operator can be used to create a new object by spreading properties of an existing object.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };
// console.log(obj2); // Output: {a: 1, b: 2, c: 3}

// Key Differences
// The rest operator is used in function parameters and destructuring assignments.
// The spread operator is used in function calls, array literals, and object literals.
// The rest operator collects multiple elements into an array.
// The spread operator expands an array or object into individual elements.