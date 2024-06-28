// User se 5 input lena hai, inka maximum nikalna hai.Agar maximum > 90 hota hai to ek function call karna hai, jisme maximum aur ek user input ko subtract karna hai aur result return karna hai.Agar result positive hai to us value ka cube return karna hai.agar result - ve hai to fir uska sqaure nikalna hai aur agar result 0 ata hai to fir apko console log karna hai: "aur nahi ho raha hai merese".
// const maxsub = (max, p)=>{
//     return max- p;
// }
// const maximum = (a, b, c, d, e) => {
//     let max = a;
//     let p = 3;
//     if (b > max) max = b;
//     if (c > max) max = c;
//     if (d > max) max = d;
//     if (e > max) max = e;

//     if (max > 90) {
//         let res = maxsub(max, p);
//         if (res > 0) {
//             return res * res * res;
//         } else if (res < 0) {
//             return res * res;
//         }
//         else {
//             console.log("our nhi ho rha mere se")
//         }
//     }
//     }
// console.log(maximum(50, 60, 170, 20, 30));


// User se 3 input lena hai, inka average nikalna hai.Agar average > 40 hai to ek function call karna hai, jisme 2 input lena hai aur unka product return karna hai.Agar product negative hai to absolute value return karna ha  aur uske baad uska reverse nikalna.agar product positive hai to fir check karna hai ki product prime number hai ya nahi hai.


// const reverse = (n) => {
//     let rev = 0;
//     while (n > 0) {
//         rev = rev * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return rev;
// };

// const primenumber = (n) => {
//     if (n <= 1) return false;
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// };

// const prodof2 = () => {
//     let a = -99,
//         b = 65;
//     return a * b;
// };

// const main = () => {
//     let a = 83,
//         b = 95,
//         c = 99;
//     let avg = (a + b + c) / 3;
//     if (avg > 40) {
//         let res = prodof2();
//         if (res < 0) {
//             res = Math.abs(res);
//             console.log(reverse(res));
//         } else if (res > 0) {
//             if (primenumber(res)) console.log("Prime Number");
//             else console.log("Not a Prime Number");
//         }
//     }
// };

// main();