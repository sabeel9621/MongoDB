// 1. create an object of user as created in mongodb and you have to pass that object in function and print all its values by destructing it.
// const person = {
//     name: "anil",
//     age: 24,
//     email: "anil@gmail.com"
// }

// function greet ({ name, age, email }) {

//     console.log(`hello may name is ${name} and my age is ${age} and my email is ${email}`);
// }
// greet(person);


// 2. without destructing

// const person = {
//     name: "aman",
//     age: "27",
//     email: "aman@gmail.com",
//     skills:["Java","Python","C++"]
// }

// console.log(person);

// 3.you have to use the mongodb user dataset to pass object in function now from that function you have to pass the skills key pass as object to another function print all its skills.using foreach method

// function function2 (skills) {
//     skills.forEach((skill) => {
//         console.log(skill);
//     });
// }

// function greet({ name, age, skills }) {
//     console.log(`hello my name is ${name} and my age is ${age}`);

//     function2(skills);
// }
// const person = {
//     name: "mohit",
//     age: 27,
//     skills: ["Java", "Python", "C++"]

// }
// greet(person);

// 4. you have to use the mongodb user dataset to pass object in function now from that function you have to pass the skills key pass as object to another function print all its skills using this method.
//     hint:

// function function2(skills){
//     skills.forEach((skill) => {
//         console.log(skills);
//     })

// }


// function greet ({ name, age, skills }) {
//     console.log(`my name is ${name} my age is ${age}`);
//     function2(skills);
// }

const person = {
    name: "mohit",
    age: 27,
    skills: ["Java", "Python", "C++"]

}
const skills = ["java", "c++", "python"];
const [a, b, c] = skills;
console.log(a);
console.log(b);
console.log(c);