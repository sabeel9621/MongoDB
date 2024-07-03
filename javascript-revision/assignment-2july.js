//1: Sum all the numbers in an array using the method.
// const array = [1, 2, 3, 4, 5];

// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);

//2:     Find the largest number in an array using the method.
// const array = [1, 2, 3, 4, 5];

// const largest = array.reduce((max, currentValue) => (currentValue > max ? currentValue : max), array[0]);

// console.log(largest);

//3:         Count the number of elements in an array using the reduce method.

// const frequencycount = (...nums) => {
//     return nums.reduce((count, num) => {
//         if (num == 3) return count + 1;
//         else return count;
//     }, 0);
// };

// console.log(frequencycount(1, 2, 3, 3, 3, 3, 3, 4, 5, 6));
//  4:Multiply all the numbers in an array using the method.
// const array = [1, 2, 3, 4, 5];

// const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// console.log(product);

//5:Find the smallest number in an array using the method.
// const array = [1, 2, 3, 4, 5];

// const smallest = array.reduce((min, currentValue) => (currentValue < min ? currentValue : min), array[0]);

// console.log(smallest);

//6: Create an object representing a person with properties, email.Destructure these properties into separate variables and log them to the console.
// const person = {
//     name: "Aman",
//     age: 27,
//     email: "Aman@gmail.com",
//     city: "lucknow",
// };


//  const { name, age, email, city } = person;
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Email:", email);
//  console.log("city",city);

// function userdetail ({ name, email, city,age }) {
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Email:", email);
// console.log("city", city);
//  }
//  userdetail(person);



// Create an object representing a book with properties,, author andyear.Destructure these properties and log them to the console.

// const bookProperties ={
//     author: "john",
//     year: 2018,
//     age:50,
// }

// const{author,year,age}=bookProperties;
// console.log("author", author);
// console.log("year", year);
// console.log("age", age);
// Create an object representing a product with properties,, name andprice.Destructure these properties into separate variables and log them to the console.

// const product = {
//     name: "laptop",
//     price: "35000",
//     category:"Electronics"
// }
// const {name, price, category} = product;
//     console.log("name", name);
//     console.log("price", price);
//     console.log("category", category);


// Create an object representing a car with propertiesyear.Destructure these properties into separate variables and log them to the console.


// const car = {
//     name: "Toyota",
//     model: "Camry",
//     year: 2021,
//     color: "Red",
// };

// const { name, model, year, color } = car;
// console.log("name", name);
// console.log("model", model);
// console.log("year", year);
// console.log("color", color);


// Write a function that accepts an object with propertiesemail, and destructures these properties to return a string in the format "Name: [name], Age: [age], Email: [email]".

// const user={
//     name: "laxman",
//     age: 27,
//     email: "laxman@gmail.com",
//     city:"jaipur"
// }

// function userinfo ({name,age,email,city}) {
//     console.log(`name: ${name} age: ${age} email: ${email} city: ${city}`);
// }

// userinfo(user);

// Write a function that accepts an object with properties,, author, andyear, and destructures these properties to log each property to the console.
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "prajjal",
//     year: 2018
// };

// function bookinfo ({title,author,year}) {
//     console.log(`title: ${title} author: ${author} year: ${year}`);
// }
// bookinfo(book);


// Write a function that accepts an object with properties,, name, andprice, and destructures these properties to return an object with only the name and price properties.


// const product={
//     id: 1,
//     name: "laptop",
//     price:"40000"
// }

// function nameandprice (price1) {
//     const { name, price } = price1;
//     return { name, price };

// }
// const result=nameandprice(product);
// console.log(result);



// Write a function that accepts an object with propertiesyear, and destructures these properties to return a string describing the car in the format "[year] [make] [model]".

// const car = {
//     make: "toyota",
//     year: "2021",
//     model:"camry"
// }
// function carinfo () {
//     const { make, model, year } = car;
//     return `${year} ${make} ${model}`;
// }
// const result = carinfo(car);
// console.log(result);




// Write a function called introducePerson that accepts an object with properties,, age, andemail.Destructure these properties inside the function and return a string in theformat "Hi, my name is [name], I am [age] years old, and you can contact me at [email]".The function should handle cases where the properties might be missing by using default values("Unknown" for and 0 forage).

// const person = {
//     name: "prajjal",
//     age: 29,
//     email: "prajjal@gmail.com"
// };
// const person2 = {
//     email: "Aman@example.com"
// };
// function personinfo (person) {
//     const { name = "Unknown", age = 0, email } = person;
//     return`hi my name is ${name} i am ${age} year old and you can contact me ${email}`;
// }
// console.log(personinfo(person));
// console.log(personinfo(person2));

// Write a function called describeBook that accepts an object with properties,, author, andyear.Destructure these properties inside the function and log a message to the console in the format "The book '[title]' was written by [author] and published in [year]".Handle cases where any of the properties might be missing by using default values("Unknown Title" fortitle, "Unknown Author" forauthor, and "Unknown Year" foryear).

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
// };

// function bookinfo ({title,author,year}) {
//     console.log(`the book ${title} was written by ${author} and published in ${1960}`);
// }
// bookinfo(book);

// function describeBook ({ title = "Unknown Title", author = "Unknown Author", year = "Unknown Year" }) {
//     console.log(`The book '${title}' was written by ${author} and published in ${year}.`);
// }
//  describeBook({});


// Write a function called displayProductInfo that accepts an object with properties,, name, andprice.Destructure these properties inside the function and return a string in the format "Product [name] (ID: [id]) costs $[price]".The function should handle cases where any of the properties might be missing by using default values("Unknown ID" forid, "Unknown Name" forname, and 0 forprice).

// function displayProductInfo ({ id = "Unknown ID", name = "Unknown Name", price = 0 }) {
//     return `Product ${name} (ID: ${id}) costs $${price}`;
// }

// // Example usage:
// console.log(displayProductInfo({ id: "123", name: "Laptop", price: 999.99 }));
// console.log(displayProductInfo({ id: "456", name: "Smartphone" }));
// console.log(displayProductInfo({}));


// const product = {
//     id: "123",
//     name: "laptop",
//     price: 30000,
// }

// function displayProductInfo ({id,name,price}) {
//     console.log(`product id: ${id},  product name: ${name}, price: ${price}`);
// }
// displayProductInfo(product);

// function ProductInfo ({ id = "Unknown ID", name = "Unknown Name", price = 0 }) {
//     return `Product ${name} (ID: ${id}) costs $${price}`;
// }
// // console.log(ProductInfo({ id: "123", name: "Laptop", price: 999.99 }));
// console.log(ProductInfo({ id: "unknow", name: "unknow" }));
// ProductInfo({});


// Write a function called carDescription that accepts an object with properties,, model, andyear.Destructure these properties inside the function and return a string in the format "This car is a [year] [make] [model].".Handle cases where any of the properties might be missing by using default values("Unknown Make" formake, "Unknown Model" formodel, and "Unknown Year" foryear).



//


// function carDescription ({ make = "Unknown Make", model = "Unknown Model", year = "Unknown Year" }) {
//     return `This car is a ${year} ${make} ${model}.`;
// }

// console.log(carDescription({ make: "Toyota", model: "Corolla", year: 2020 }));
// console.log(carDescription({}));


