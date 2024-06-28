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



