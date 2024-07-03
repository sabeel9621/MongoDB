
// 1. calculate the factorial of 5 using reduce method

// const factorial = (...nums) => {
//     return nums.reduce((fact, nums) => fact * nums, 1);
// };
// console.log(factorial(1, 2, 3, 4, 5));
//2. find the maximum of n numbers passed from function using reduce

// const maximum = (...number) => {
//     return number.reduce((maxi, number) => (maxi > number ? maxi : number), 0);
// }
// console.log(maximum(10, 20, 30, 40, 50));

// 3. pass more than one string argument from function and check whether the name prajjal is appear how many times

// const countprajjal = (...names) => {
//     return names.reduce((count, name) => {
//         return name === "prajjal" ? count + 1 : count;
//     }, 0);
// }
// console.log(countprajjal("prajjal", "prajjal", "prajjal", "aman", "anil", "anu"));


