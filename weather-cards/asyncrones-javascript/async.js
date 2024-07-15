// // asynchronous javascript

// // callback function
// callback function is a function passed into another function as an argument
// // callback hell

// // promises

// // async/await

// // main function vs side function
// // main function is the function that is called first
// // side function is the function that is called after the main function

// // puranee languages mai ek problem thi
// // main function wo agar kisi side function ko call karta hai aur side function ko us input par output lane mai agar koi time lagata hai usss wakt main function ke rest of the code wait kar rahe hai hote hai  jab tak ki wo return na ho jaye
// //  ise synchronisation issue bolte hai
// //  setTimeOut ===delay produce
// // callback ===callback hell
// // promise ===agar code wait kar rha hai to use wait mat karne do and rest of the kam jo leftover hai use complete karle
// // pending resolve reject
// // async await === promise ka ek alternative hai
// // async await synchronous function jaisa hi dikta bass yeh with async keyword likha jata hai
// // application hai data fetching

// // kisi third party api ka use karte hai
// // uss wakt data ko network se hote hue program tak ane mai time lag sakta hai iss wakt ek promise banaya jab fulfil ho to wo content show ho otherwise baki code apna kaam karte rahe wo iss data fetching ke liye wait na karein

// // data base ke saath connection establish karna ho

// // jab rest apis banai jati hai tab bhi async javascript format mai hi banta hai

// // jaha par time consume ho sakta hai wo sare functions apne app mai async function banenge that async function is asynchrounous javascript

// // iske liye side stack ka use karte hai // wht is side stack

// // what is  single threaded ?
// A single - threaded language is one that can execute only one task at a time.

// // event loop ka use hota hai// what is event loop

//
//The event loop is a fundamental concept in JavaScript that allows it to perform asynchronous operations, even though it is single - threaded.


// // data fecthing using async function
// const getdata = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/user&quot;");
//     const datas = await response.json();
//         console.log(datas);
//     } catch (error) {
//         console.log(error);
//     }
// };
// const main = async () => {
//     console.log("abc");
//     await getdata();
//     console.log("def");
//     console.log("def2");
//     console.log("def3");
// };
// main();
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");



// const getdata = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     datas = await response.json();
//         const addressdata = datas.reduce((newaddarr, data) => {
//             return [...newaddarr, data.username,data.phone];
//         }, []);
//         console.log(addressdata);
//     } catch (error) {
//         console.log(error);
//     }
// };
// const main = async () => {
//     console.log("abc");
//     await getdata();
//     console.log("def");
//     console.log("def2");
//     console.log("def3");
// };

// main();
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");




// const getdata = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     data = await response.json();
//          console.log(data[0].username);
//         const addressdata = data.reduce((newaddarr, data) => {
//             return [...newaddarr,data.username, data.phone];
//         }, []);
//         console.log(addressdata);
//     } catch (error) {
//         console.log(error);
//     }
// };
// const main = async () => {
//     console.log("abc");
//     await getdata();
//     console.log("def");
//     console.log("def2");
//     console.log("def3");
// };

// main();
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");