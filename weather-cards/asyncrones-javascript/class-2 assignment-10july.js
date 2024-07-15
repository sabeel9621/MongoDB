// JavaScript is considered as Single Threaded application
// becuase it has single call stack matlab ek bar mai ek hi piece of code run kar sakta hai.

// Event loop:
// non blocking operation, code rukta nahi hai jab function call hota hai
// when asynchronous operation is initiated JavaScript can continues excuting other codes while waiting for the asynchronous code to complete


// callback queues
// jab asynchronous operation complete ho jata hai it is placed in the callback queue, event loop bar bar check kar karta hai ki call stack empty hai ya nahi hai,


//     promises or async await
// built on the top of promises allows asynchronous programming.

// web apis
// http req, dom events




// const getdata = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     datas = await response.json();
//         const addressdata = datas.reduce((newaddarr, data) => {
//             return [...newaddarr, data.username];
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
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     data = await response.json();
//          console.log(data);
//         const addressdata = data.reduce((newaddarr, data) => {
//             return [...newaddarr, data.username, data.phone];
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



// 1. user, post, image koi ek se data fetch karna hai

// const getdata = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         data = await response.json();
//         console.log(data);

//         const addressdata = data.reduce((newaddarr, data) => {
//             return [...newaddarr, data.username, data.phone];
//         }, []);
//         console.log(addressdata);

//     } catch (error) {

//     }
// };

// const main = async () => {
//     await getdata();
// };
// main();

// 2. data fetch hone ke badd sirf ek field of information ka new array create karna hai.

// const getdata = async () => {
//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         data = await response.json();
//         console.log(data);
//         const feild = data.reduse((newaddarr, user) => {
//         newaddarr.push(user.username);
//             return newaddarr;

//         }, []);
//         console.log(feild);



//     } catch (error) {

//     }
// }

// getdata();

// 3. data fetch hone ke badd har odd field of information ka new array create karna hai.

// const getdata = async () => {

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         data = await response.json();
//         // console.log(data);

//         const add = data.reduce((acc, user, index) => {
//             if (index % 2 == 0) {
//                 acc.push(user);
//             }
//             return acc;
//         },[]);
//         console.log(add);


// } catch (error) {

// }
// }

// getdata();


// 4. data fetch hone ke badd har even field of information ka new array create karna hai.

// const getdata = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         data = await response.json();
//         // console.log(data,[0]);
//         const odd = data.reduce((acc, user, index) => {
//                     if (index % 2 == 0) {
//                         acc.push(user);
//                     }
//                     return acc;
//                 },[]);
//                 console.log(odd);
//     } catch (error) {

//     }
// }

// getdata();


// 5. data fetch hone ke badd har mutiple of 3 ka field of information ka array create karna ke lana hai.

// const getdata = async () => {
//     try {

//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);

//         const result = [];

//         data.forEach((user,index)=> {
//             if ((index + 1) % 3 === 0) {
//                 result.push([user.name, user.username, user.email]);
//             }
//         });
//         console.log(result);

//     } catch (error) {

//     }
// }
// getdata();




// 6.data mai se se sirf 2 - 3 field of information ko leke ek array mai add karna hai.
// const getdata = async () => {
//     const response = await fetch(("https://jsonplaceholder.typicode.com/users"));

//     data = await response.json();
//     console.log(data);

//     const add = data.reduce((acc, user, index) => {
//         if ((index + 1) % 3 === 0) {
//             acc.push([user.name, user.email]);
//         }
//         return acc;
//     }, []);
//     console.log(add);

// }
// getdata();