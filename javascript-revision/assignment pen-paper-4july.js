// 1.  Create a user - defined callback function that sorts an array of numbers in ascending or descending order based on the callback provided.The master function should take an array and a callback function as arguments.
// Callback function for ascending order
// function ascendingOrder (a, b) {
//     return a - b;
// }

// // Callback function for descending order
// function descendingOrder (a, b) {
//     return b - a;
// }

// // Master function to sort array based on callback
// function sortArray (arr, callback) {
//     return arr.sort(callback);
// }

// // Example usage
// const numbers = [5, 3, 8, 1, 2];

// const sortedAscending = sortArray(numbers, ascendingOrder);
// console.log("Sorted in Ascending Order:", sortedAscending);

// const sortedDescending = sortArray(numbers, descendingOrder);
// console.log("Sorted in Descending Order:", sortedDescending);


// 2.  Create an object named product with at least 5 keys(e.g., productId, productName, price, category, tags).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const product = {
//     productid: "123",
//     productName: "laptop",
//     productprice: 35000,
//     category: "gadget",
//     tags: ["new", "sale", "popular"],
// }

// function handelarraykey (array) {
//     console.log("handel values:", array);
// }


// function handelobjectkeys (obj) {
//     console.log("object keys:",Object.keys(obj));
// }


// function productinfo ({ productid, productName, productprice, category, tags }) {
//     console.log(`productid:${productid} productname: ${productName} productprice: ${productprice} category: ${category} tags: ${tags}`);

//     handelarraykey(tags);
//     handelobjectkeys({productid,productName,productprice,category,tags});

// }
// productinfo(product);
// 3.Create an object named student with at least 5 keys(e.g., studentId, studentName, grade, subjects, hobbies).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.


// const students = {
//     studentsid: "456",
//     studentsname: "Aman",
//     studentsgrade: "A",
//     subjects: ["hindi", "english", "science"],
//     hobbies: ["reading", "sweming", "coding"],
// }


// function handelarraykey (array) {
//     console.log("Array values:", array);
// }

// function objectkeys (obj) {
//     console.log("object keys:", Object.keys(obj));
// }


// function studentsinfo ({studentsid,studentsname,studentsgrade,subjects,hobbies }) {
//     console.log(`student id is: ${studentsid} student name is:${studentsname} student grade is: ${studentsgrade} subjects are: ${subjects} hobbies are: ${hobbies} `);

//     handelarraykey(subjects);
//     objectkeys({ studentsid, studentsname, studentsgrade, subjects, hobbies });
// }

// studentsinfo(students);


// // 4.Create an object named customer with at least 5 keys(e.g., customerId, customerName, email, phoneNumbers, addresses).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.
// const customer = {
//     customerId: 789,
//     customerName: "Prajjal",
//     email: "Prajjal@gmail.com",
//     phoneNumbers: ["123-456-7890", "987-654-3210"],
//     addresses: ["123 Main St, Anytown, jaipur", "456 Elm St, Othertown, jaipur"]
// };

// function function2 (array) {
//     console.log("array keys:", array);
// }

// function handleObjectKeys (obj) {
//     console.log("Object keys:", Object.keys(obj));
// }

// function customerinfo ({ customerId, customerName, email, phoneNumbers, addresses }) {
//     console.log(`customer id is: ${customerId} customer name is: ${customerName} email is: ${email} phone numbers are: ${phoneNumbers} addresses are: ${addresses}`);

//     function2(phoneNumbers);

//     handleObjectKeys({ customerId, customerName, email, phoneNumbers, addresses });
// }

// customerinfo(customer);

// 5.Create an object named project with at least 5 keys(e.g., projectId, projectName, deadline, teamMembers, tasks).One of the keys should have an array as its value.Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// Create the project object
// const project = {
//     projectId: 1,
//     projectName: "AI Development",
//     deadline: "2024-12-31",
//     teamMembers: ["Alice", "Bob", "Charlie"],
//     tasks: ["Research", "Development", "Testing"]
// };

// // Function to print all information from the destructured project object
// function printProjectDetails ({ projectId, projectName, deadline, teamMembers, tasks }) {
//     console.log(`Project ID: ${projectId}`);
//     console.log(`Project Name: ${projectName}`);
//     console.log(`Deadline: ${deadline}`);
//     console.log(`Team Members: ${teamMembers.join(", ")}`);
//     console.log(`Tasks: ${tasks.join(", ")}`);

//     // Call the function to handle the tasks array
//     handleTasksArray(tasks);

//     // Call the function to pass the project object as a key
//     passObjectAsKey(project);
// }

// // Function to handle the tasks array
// function handleTasksArray (tasks) {
//     console.log("Handling tasks array...");
//     tasks.forEach(task => {
//         console.log(`Task: ${task}`);
//     });
// }

// // Function to pass the project object as a key and print all keys
// function passObjectAsKey (obj) {
//     console.log("Printing all keys of the project object...");
//     Object.keys(obj).forEach(key => {
//         console.log(`Key: ${key}`);
//     });
// }

// // Call the function to print project details and handle other operations
// printProjectDetails(project);

// 6.Create a function named addToArray that accepts an array and a new element to add.Each time the function is called, it should return a new array with the new element added at the end, without mutating the original array.Use the spread operator to achieve this.


// const initialArray = [1, 2, 3];
// const newArray1 = addToArray(initialArray, 4); //[1, 2, 3, 4]
// const newArray2 = addToArray(newArray1, 5);//[1, 2, 3, 4, 5]

// function addToArray (array, newElement) {
//     return [...array, newElement];
// }

// console.log(initialArray);
// console.log(newArray1);
// console.log(newArray2);


// 7.Create a function named removeLastElement that accepts an array.Each time the function is called, it should return a new array with the last element removed, without mutating the original array.Use the spread operator and array methods to achieve this.
const initialArray = [1, 2, 3, 4];
const newArray1 = removeLastElement(initialArray); // [1, 2, 3]
const newArray2 = removeLastElement(newArray1); // [1, 2]

function removeLastElement (array) {
    return [...array.slice(0, -1)];
};


console.log(initialArray);
console.log(newArray1);
console.log(newArray2);
