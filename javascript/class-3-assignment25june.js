// // Question 1
// // User se 4 input lena hai, inka sum nikalna hai.Agar sum > 100 hota hai to ek function call karna hai, jisme 3 input lena hai aur unka average return karna hai.Agar returned average > 50 hai to ek aur function call karke factorial nikalna hai aur check karna hai wo prime number hai ya nahi.


// function calculateavg (num1, num2, num3) {
//     return (num1 + num2 + num3) / 3
// }

// function facti (n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i
//     }
//     return fact
// }

// function isPrime (n) {
//     let flag = 0;
//     for (let i = 2; i < n; i++) {

//         if (n % i == 0) {
//             flag = 1;
//         }
//         return false

//     }
//     return true
// }
// function main () {
//     let a = 60;
//     let b = 60;
//     let c = 50;
//     let d = 50;
//     let sum = a + b + c + d;
//     if (sum > 100) {
//         let avg = calculateavg(a, b, c);
//         if (avg > 50) {
//             let fact = facti(avg)
//             let prime = isPrime(fact)
//             return ${fact}:is prime number
//         }
//         else {
//             return ${fact}:is not prime
//         }
//     }
// }
// let finalresult = main()
// console.log(finalresult)


// // User se 2 input lena hai, inka product nikalna hai.Agar product < 50 hota hai to ek function call karna hai, jisme product aur ek user input ko add karna hai aur result ko return karna hai.Agar returned value odd hai to ek aur function call karke us value ko square karna hai aur result return karna hai.
// function addnum (a, b) {
//     return a + b
// }

// function oddsqure (n) {
//     return n * n
// }
// function main () {
//     let a = 8;
//     let b = 5;
//     let product = a * b;
//     if (product < 50) {
//         let c = 15;
//         let result = addnum(product, c)
//         if (result % 2 !== 0) {
//             result = oddsqure(result)
//         }
//         console.log(`final result is ${ result }`)
//     }
//     else {
//         console.log("product is greater then 50")
//     }
// }
// let finalresult = main()



// //     Question 2
// // User se 6 input lena hai, inka maximum nikalna hai.Agar maximum > 75 hota hai to ek function call karna hai, jisme maximum aur 2 user inputs ko subtract karna hai aur result return karna hai.Agar result negative hai to absolute value nikal kar factorial return karna hai.
// const maxsub=( max,n1,n2,)=>{
//     return max-n1-n2;
// }
// const facti = (n) =>{
//     let fact = 1;
//     for (let i = 1; i <= n; i++){
//         fact = fact * i;
//     }
//     return fact;
// }


// const maximum=()=> {
//     let a = 10,
//         b = 20,
//         c = 30,
//         d = 40,
//         e = 50,
//         f = 80;
//     let max = a;
//     let p = 3, q = 5;
//     if(b > max) max = b;
//     if (c > max) max = c;
//     if (d > max) max = d;
//     if (e > max) max = e;
//     if (f > max) max = f;
//     console.log(max);
//     if (max > 75) {
//         let result = maxsub(max, p, q);
//         if (result < 0) {
//             let absolutevalue = math.abs(result);
//             let fact = facti(absolutevalue);
//             return fact;
//         }
//     }
// }
// let finalresult = maximum();
// console.log('finalresult');





// // User se 3 input lena hai, inka sum nikalna hai.Agar sum 0 hota hai to ek function call karna hai aur check karna hai ki wo perfect square hai ya nahi.Agar perfect square hai to uska square root nikalna hai aur result return karna hai.


// //     Question 3
// User se 5 input lena hai, inka average nikalna hai.Agar average > 60 hai to ek function call karna hai, jisme 3 input lena hai aur unka product return karna hai.Agar product even hai to uska half return karna hai, agar odd hai to uska double return karna hai.

// function product(){
//     let x =5 ,
//         y =10,
//         z = 20;
//     return x*y*z;
// }


// const main = () => {
//     let a = 20,
//         b = 30,
//         c = 40,
//         d = 50,
//         e = 60;

//     let avg = (a + b + c + d + e) / 5;
//     if (avg > 60) {
//         let pro = product();
//         if (pro % 2 === 0) {
//             return pro/2
//         }
//         else {
//             return pro*2
//         }
//     }
//     else {
//         console.log("less than 60")
//     }
// }
// let finalresult = main();
// console.log(finalresult);


// // User se 4 input lena hai, inka minimum nikalna hai.Agar minimum < 10 hai to ek function call karna hai aur minimum ko 5 se multiply karna hai aur result return karna hai.Agar result > 50 hai to factorial nikalna hai aur result return karna hai.

// //     Question 4
// // User se 3 input lena hai, unka sum nikalna hai.Agar sum > 80 hai to ek function call karna hai, jisme 2 input lena hai aur unka division result return karna hai.Agar result integer hai to us integer ka reverse return karna hai.

// function reverseint (num) {
//     let reversed = 0;
//     while (num !== 0) {
//         reversed = reversed * 10 + num % 10;
//         num = math.floor(num / 10);
//     }
//     return reversed;
// }

// function devide (a, b) {
//     if (b === 0) {
//         return "division by zero in not allowed"
//     }
//     return a / b;
// }
// let a = 10,
//     b = 20,
//     c = 50;
// let sum = a + b + c;
// // console.log(sum);
// if (sum > 80) {
//     let d = 10,
//         e = 30;
//     let res = divede(d, e);
//     if (Number.isInteger(result)) {
//         let revesreresult = reverseint(result);
//         console.log("reversed result:" + revesreresult);
//     } else {
//         console.log("result is not an integer:" + result);
//     }
// } else {
//         console.log("some is not greter than 80" )
//     }





// // User se 2 input lena hai, inka difference nikalna hai.Agar difference < 0 hai to absolute value return karna hai.Agar difference even hai to ek function call karna hai aur us value ka cube return karna hai.
// function cube (num) {
//     return num * num * num;
// }

// let a = 20,
//     b = 30;
// let difference = a - b;
// // console.log(difference);
// if (difference < 0) {
//     difference = Math.abs(difference);
//     console.log("absolute difference:" + difference);
// } else {
//     console.log("difference:" + difference);
// }
// if (difference % 2 === 0) {
//     let cuberesult = cube(difference);
//     console.log("cube of the difference:" + cuberesult);
// }

// //     Question 5
// // User se 4 input lena hai, inka product nikalna hai.Agar product > 1000 hai to ek function call karna hai, jisme product aur ek user input ko divide karna hai aur result return karna hai.Agar result fraction hai to uska ceiling value return karna hai.
// function main () {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     let d = 4;

//     var product = a * b * c * d;
//     if (product > 1000) {
//         let result = product / a;
//         let ceiling_value = Math.ceil(result);
//         return ceiling_value
//     }
//     else {
//         return product
//     }
// }
// let finalresult = main()
// console.log(finalresult)


// // User se 3 input lena hai, inka average nikalna hai.Agar average < 25 hai to ek function call karna hai aur check karna hai ki wo prime number hai ya nahi.Agar prime hai to uska factorial return karna hai.
// function isPrime (n) {
//     let flag = 0;
//     for (let i = 2; i < n; i++) {

//         if (n % i == 0) {
//             flag = 1;
//         }
//         return false

//     }
//     return true

// }
// function factorial () {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i
//     }
//     return fact
// }


// function main () {
//     let a = 15;
//     let b = 10;
//     let c = 20;
//     let avg = (a + b + c) / 3;
//     if (avg < 25) {
//         if (isPrime(avg)) {
//             let fact = factorial(avg);
//             return fact;
//         }
//         else {
//             console.log("not a prime number")
//         }

//     } else {
//         console.log("avg is not less than 25")
//     }
// }
// let finalresult = main()
// console.log(finalresult);

// //     Question 6
// // User se 5 input lena hai, inka maximum nikalna hai.Agar maximum > 90 hota hai to ek function call karna hai, jisme maximum aur ek user input ko subtract karna hai aur result return karna hai.Agar result positive hai to us value ka cube return karna hai.
// const maxsub = (max, p) => {
//     return max - p;
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
//         }
//     }
// }
// console.log(maximum(50, 60, 170, 20, 30));




// // User se 4 input lena hai, inka sum nikalna hai.Agar sum < 50 hai to ek function call karna hai aur sum ka reverse nikalna hai aur result return karna hai.Agar reverse value even hai to uska half return karna hai.
// function reverse (n) {
//     let reverse = 0;
//     while (n !== 0) {
//         reversed = reversed * 10 + n % 10;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }
// const main = () => {

//     let a = 10,
//     b = 20,
//     c = 30,
//     d = 40;
//     let sum = (a + b + c + d);
//     console.log(sum);
//     if (sum < 50) {
//         let res = reverse(sum);
//         console.log("reversed sum" + res);

//         if (res % 2 === 0) {
//             let halfreversed = res / 2;
//             console.log("half of reversed sum" + halfreversed);
//         }
//     } else {
//         console.log("sum is not less the 50")
//     }
// }
// main();



// //     Question 7
// // User se 3 input lena hai, inka average nikalna hai.Agar average > 40 hai to ek function call karna hai, jisme 2 input lena hai aur unka product return karna hai.Agar product negative hai to absolute value return karna hai.

// let product2 = () => {
//     let x = 30,
//         y = 20;
//     return x * y;
// };


// const main = () => {
//     let a = 20,
//         b = 10,
//         c = 30;
//     let avg = (a + b + c) / 3;
//     if (avg > 40) {

//         let x = 30,
//             y = 20;
//         let product = productoftwonumber(x, y);
//         console.log("product" + product);
//         if (product < 0) {
//             let absolute = Math.abs(product);
//             console.log("absolute value of product" + absolute);
//         }
//     } else {
//         console.log("average is not greter than 40");
//     }
// }
// main();




// // User se 2 input lena hai, inka maximum nikalna hai.Agar maximum > 30 hai to ek function call karna hai aur check karna hai wo prime hai ya nahi.Agar prime hai to factorial return karna hai.

// const primenumber = (n) => {
//      if (n <= 1) return false;
//      for (let i = 2; i * i <= n; i++) {
//          if (n % i == 0) return false;
//      }     return true;
// };

// const main = () => {
//     let a = 20,
//         b = 30;
//     let max = a;
//     if (b > max) max = b;
//     // console.log(max);
//     if (max > 30) {
//         let res = prime(res);
//         if (res % 2 === 0) {
//             console.log("prime number");
//         }

//     }
// }
// main();

// //     Question 8

// // User se 4 input lena hai, inka sum nikalna hai.Agar sum > 150 hai to ek function call karna hai, jisme 3 input lena hai aur unka sum return karna hai.Agar returned sum even hai to factorial nikalna hai aur result return karna hai.
// function factorial (n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// function sumofnumber () {
//     let x = 10,
//         y = 20,
//         z = 30;
//     return x + y + z;
// }

// const main = () => {
//     let a = 50,
//         b = 50,
//         c = 30,
//         d = 30;
//     let sum = a + b + c + d;
//     // console.log(sum);
//     if (sum > 150) {
//         let res = sumofnumber();
//         if (res % 2 === 0) {
//             let fact = factorial(res);
//             console.log(`the factorial of even sum $ {res} is ${fact}`);
//         } else {
//             console.log(`the sum of the three new inputs $ {res} is not even `);
//        }
//     } else {
//         console.log(`the sum of the four inputs ${sum} is not greter than 150`);
//     }
// }
// main();

// // User se 2 input lena hai, inka product nikalna hai.Agar product < 20 hai to ek function call karna hai aur product ko 5 se add karna hai aur result return karna hai.
// function add (n) {
//     return n + 5;
// }
// const main = () => {
//     let a = 5,
//         b = 15;
//     let product = a * b;
//     if (product < 20) {
//         let res = add(product);
//         console.log(`the product ${product} is less than 20 after adding 5 the result is ${result}`);
//     } else {
//         console.log(`the product${product} is not less than 20.`);
//     }
// }
// main();

// //     Question 9
// // User se 6 input lena hai, inka average nikalna hai.Agar average > 70 hai to ek function call karna hai, jisme 4 input lena hai aur unka maximum return karna hai.Agar maximum > 50 hai to uska cube return karna hai.
// function  () {
//     let w = 10,
//         x = 20,
//         y = 30,
//         z = 40;

// }

// const main = () => {
//     let a = 10,
//         b = 20,
//         c = 10,
//         d = 20,
//         e = 10,
//         f = 30;
//     let avg = (a + b + c + d + e + f) / 6;
//     if (avg > 70) {
//         let res = getmaxcube();
//         console.log(`result:${res}`);

//     } else {
//         console.log(`avg(${avg}) is not greter than 70.`);
//     }



//        }


// // User se 3 input lena hai, inka sum nikalna hai.Agar sum < 30 hai to ek function call karna hai aur sum ko 10 se multiply karna hai aur result return karna hai.
// function multi () {
//     return sum * 10;
// }

// const main = () => {
//     let a = 10,
//         b = 20,
//         c = 10;
//     let sum = a + b + c;
//     if (sum < 30) {
//         let res = multi(sum);
//         console.log(`result:${res}`);
//     } else {
//         console.log(`sum (${sum}) is not less than 30`);
//     }
// }
// main();


// //     Question 10
// // User se 5 input lena hai, inka product nikalna hai.Agar product > 500 hai to ek function call karna hai, jisme product aur ek user input ko divide karna hai aur result return karna hai.Agar result integer hai to factorial nikalna hai aur result return karna hai.






// const main=()=>{
//     let a = 20,
//         b = 50,
//         c =60,
//         d = 40,
//         e = 30;
//     let product = a * b * c * d * e;
//     if (product > 500) {
//         let res = divede(product/5);

//     }

// }


// // User se 4 input lena hai, inka maximum nikalna hai.Agar maximum > 20 hai to ek function call karna hai aur check karna hai wo prime hai ya nahi.Agar prime hai to uska double return karna hai.
// // 1 class comment
// function isprime (num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i <= num; i += 6){
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;

// }



// function doubel (num) {
//     if (isprime(num)) {
//         return num * 2;
//     }
//     return num;
// }

// const maximum = () => {
//     let a = 20,
//         b = 50,
//         c = 60,
//         d = 40;
//     let max = a;
//     if (b > max) max = b;
//     if (c > max) max = c;
//     if (d > max) max = d;
//     // console.log(max);
//     if (max > 20) {
//         let res = doubel(max);
//         console.log("res", res);
//     } else {
//         console.log("maximum is not greter than 20.");
//     }


// }
// maximum();