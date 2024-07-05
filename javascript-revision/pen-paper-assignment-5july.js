// 1. Create a user - defined callback function that sorts an array of book prices in ascending or descending order based on the callback provided.The master function should take an array and a callback function as arguments.

// 2. Create an object named `book` with at least 5 keys(e.g., `bookId`, `title`, `author`, `price`, `genres`).One of the keys should have an array as its value.Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// const book = {
//     bookId: "1",
//     title: "the great gatsway",
//     outhor: "prajjal Dhar",
//     price: 1000,
//     genres: ["classic", "fiction", "leterature"]
// }

// function arraykeys (array) {
//     console.log("Array keys:", array);
// }

// // function objectkeys (book) {
// //     console.log("object keys:", Object.keys(book));
// // }

// function printBookKeys (book) {
//     const keys = Object.keys(book);
//     console.log("Book keys:", keys);
// }



// function bookinfo ({ bookId, title, outhor, price, genres }) {
//     console.log(`bookid id is: ${bookId} title is: ${title} outhor is: ${outhor} price is: ${price} genres: ${genres}`);

//     arraykeys(genres);
//     // objectkeys({ bookId, title, outhor, price, genres });
// }

// bookinfo(book);
// printBookKeys(book);

// 3. Create an object named `weatherData` with at least 5 keys representing weather data of 5 countries(e.g., `country`, `temperature`, `humidity`, `windSpeed`, `conditions`).One of the keys should have an array as its value.Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.


const weatherData = {
    country: ["USA", "Canada", "Mexico", "UK", "Australia"],
    temperature: [72, 65, 75, 60, 80], // in Fahrenheit
    humidity: [50, 60, 70, 65, 55], // in percentage
    windSpeed: [10, 15, 5, 12, 20], // in mph
    conditions: ["Sunny", "Cloudy", "Rainy", "Windy", "Sunny"]
};

function printWeatherData ({ country, temperature, humidity, windSpeed, conditions }) {
    for (let i = 0; i < country.length; i++) {
        console.log(`Country: ${country[i]}`);
        console.log(`Temperature: ${temperature[i]}°F`);
        console.log(`Humidity: ${humidity[i]}%`);
        console.log(`Wind Speed: ${windSpeed[i]} mph`);
        console.log(`Conditions: ${conditions[i]}`);
        console.log('----------------------');
    }

    passArrayToFunction(country);
    passObjectKeysToFunction(weatherData);
}

function passArrayToFunction (array) {
    console.log("Array passed to function:", array);
    // Further processing of the array can be done here
}

function passObjectKeysToFunction (obj) {
    const keys = Object.keys(obj);
    console.log("Keys of the object:", keys);
    // Further processing of the keys can be done here
}

printWeatherData(weatherData);

// 4. Create an object named `restaurant` with at least 5 keys(e.g., `restaurantId`, `name`, `cuisine`, `rating`, `reviews`).One of the keys should have an array as its value.Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.
const restaurant = {
    restaurantId: 12345,
    name: "The Gourmet Kitchen",
    cuisine: "Italian",
    rating: 4.7,
    reviews: [
        "Amazing food and great service!",
        "The pasta was incredible.",
        "Would definitely recommend.",
        "A bit pricey, but worth it.",
        "Best Italian restaurant in town!"
    ]
};

function printRestaurantData ({ restaurantId, name, cuisine, rating, reviews }) {
    console.log(`Restaurant ID: ${restaurantId}`);
    console.log(`Name: ${name}`);
    console.log(`Cuisine: ${cuisine}`);
    console.log(`Rating: ${rating}`);
    console.log(`Reviews: ${reviews}`);
    // reviews.forEach((review, index) => {
    //     console.log(`  ${index + 1}. ${review}`);
    // });

    passArrayToFunction(reviews);
    passObjectKeysToFunction({ restaurantId,name,cuisine,rating,reviews });
}

function passArrayToFunction (array) {
    console.log("Array passed to function:", array);
    // Further processing of the array can be done here
}

function passObjectKeysToFunction (obj) {
    // const keys = Object.keys(obj);
    console.log("Keys of the object:",Object.keys(obj));

}

printRestaurantData(restaurant);


// 5. Create an object named `library` with at least 5 keys(e.g., `libraryId`, `libraryName`, `location`, `books`, `staff`).One of the keys should have an array as its value.Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function.Additionally, call a function that will pass the object as a key into another function and print all the keys.

// 6. Create a function named `addToBookCollection` that accepts an array of books and a new book to add.Each time the function is called, it should return a new array with the new book added at the end, without mutating the original array.Use the spread operator to achieve this.

// const initialCollection = [{ title: "Book1" }, { title: "Book2" }];
// const newCollection1 = addToBookCollection(initialCollection, { title: "Book3" }); // [{ title: "Book1" }, { title: "Book2" }, { title: "Book3" }]
// const newCollection2 = addToBookCollection(newCollection1, { title: "Book4" }); // [{ title: "Book1" }, { title: "Book2" }, { title: "Book3" }, { title: "Book4" }]


// function addToBookCollection (book,newElement) {
//     return [...book, newElement];
// }

// console.log(initialCollection);
// console.log(newCollection1);
// console.log(newCollection2);

// 7. Create a function named `removeLastReview` that accepts an array of restaurant reviews.Each time the function is called, it should return a new array with the last review removed, without mutating the original array.Use the spread operator and array methods to achieve this.

// const initialReviews = ["Review1", "Review2", "Review3"];
// const newReviews1 = removeLastReview(initialReviews); // ["Review1", "Review2"]
// const newReviews2 = removeLastReview(newReviews1); // ["Review1"]


// function removeLastReview (reviews) {
//     return [...reviews.slice(0, -1)];
// }

// console.log(initialReviews);
// console.log(newReviews1);
// console.log(newReviews2);