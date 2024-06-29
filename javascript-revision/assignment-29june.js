// 1. using rest operator function concept pass n no of arguments and get the maxium of it(forEach)
// const findmax = (...numbers) => {
//     let max = 0;
//     numbers.forEach(maximum => {
//         if (maximum > max) {
//             max = maximum;
//         }
//     });
//     return max;
// }
// console.log(findmax(10, 20, 40, 50, 60));

// 2.using rest operator function concept pass n no of arguments and get the minimum of it(reduce)
//  const minimum = ((...nums) => {
// return nums.reduce((min, current) => {
//     return current < min ? current : min;
// }, nums[0]);
//  })
//  console.log(minimum(2, 3, 5, 4, 6));

// 3.using rest operator function concept pass n no of arguments and get the sum of even numbers of it(forEach)

// const sumofnumber = ((...nums) => {
//     let sum = 0;
//     nums.forEach((nums) => {
//         if (nums % 2 === 0) {
//             sum += nums;
//         }
//     });
//     return sum;
// })
// console.log(sumofnumber(1, 2, 3, 4, 5,6,8));

// 4.using rest operator function concept pass n no of arguments and  get the sum of even numbers of it(reduce)
// const sumofnumbers = (...numbers) => {
//     return numbers.reduce((sum,numbers)=> {
//     if (numbers % 2 == 0) {
//         return sum + numbers;
//     } else {
//         return sum;
//     }
// }, 0);
// }
// console.log(sumofnumbers(1, 2, 3, 4, 5, 6));


// 5.using rest operator function concept pass n no of arguments an get the sum of all prime numbers of it(reduce)

// function isPrime (num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function sumOfPrimeNumbers (...numbers) {
//     return numbers.reduce((sum, current) => {
//         return isPrime(current) ? sum + current : sum;
//     }, 0);
// }

// // Example usage:
// console.log(sumOfPrimeNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 17 (2 + 3 + 5 + 7)
// console.log(sumOfPrimeNumbers(10, 11, 12, 13, 14, 15, 16, 17, 18, 19)); // Output

// 6.5.using rest operator function concept pass n no of character arguments an get the count of all vowels numbers of it.(forEach)


// function countVowels (...characters) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     characters.forEach(character => {
//         if (vowels.includes(character)) {
//             count++;
//         }
//     });

//     return count;
// }


// console.log(countVowels('a', 'b', 'c', 'd', 'e', 'i', 'o', 'u', 'A', 'E', 'I'));
// console.log(countVowels('x', 'y', 'z', 'b', 'c', 'd'));