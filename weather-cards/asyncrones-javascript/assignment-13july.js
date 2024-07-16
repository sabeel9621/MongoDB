// link:

// jsonplaceholder.typicode.com / users


// Data fetch hone ke baad, users ka ek naya array banao jo city "South Christy" mein rehte hain using filter method.
// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//     data = await responce.json();
//     console.log(data);
//     const city = data.filter(user => user.address.city === 'South christy');

//     console.log(city);
// }

// getdata();

// Data fetch hone ke baad, users ka ek naya array banao jinka company name "Romaguera-Crona" hai using filter method.
// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);

//         const usersAtRomagueraCrona = data.filter(user => user.company.name === "Romaguera-Crona");

//         console.log(usersAtRomagueraCrona);

// } catch (error) {

// }


// }

// getdata();


// Data fetch hone ke baad, users ka array se 3 users ko remove karo starting from index 2 using splice method.
// const getdata = async () => {
// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();

//         // console.log('Original users array:', data);

//         data.splice(2, 3);

//         console.log('Updated users array:', data);

//     } catch (error) {

//     }

//  }
//  getdata();



// Data fetch hone ke baad, pehle user ka name extract karo using object destructuring.
// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);
//         const name = data.map(({ name }) => name);
//         console.log(name);
//     } catch (error) {

//     }
// }
// getdata();
//  Data fetch hone ke baad, user jiska id 3 hai, uska address extract karo using object destructuring.
// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))

//         data = await responce.json();
//         // console.log(data);

//         const userid = data.find(({id})=>id===3);
//         console.log(userid);

//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, pehle user ka email extract karo using object destructuring.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));

//         data = await responce.json();
//         // console.log(data);

//         const email = data.map(({ email }) => email);
//         console.log(email);
//     } catch (error) {

//     }
// }
// getdata();


// Data fetch hone ke baad, aakhri user ka website extract karo using object destructuring.
// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();
//     // console.log(data);
//     const { website: lastuser } = data[data.length - 1];
//     console.log(lastuser);
// }
// getdata();
// Data fetch hone ke baad, users ka ek naya array banao jo pehle 5 users ko contain karta ho using slice method.
// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data =await responce.json();
//     // console.log(data)

//     const user = data.slice(0, 5);
//     console.log(user);
// }
// getdata();
// Data fetch hone ke baad, users ka name ka ek naya array banao using reduce method.
// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//     data = await responce.json();
//     // console.log(data);
//     const name = data.reduce((acc, user) => {
//         acc.push(user.name);
//         return acc;
//     }, []);
//     console.log(name);
// }
// getdata();
//  Data fetch hone ke baad, users ka ek naya array banao jo users ke email contain karta ho jin ka address.zipcode "92998-3874" hai using filter and map methods.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);
//         const user = data.filter((user) => user.address.zipcode === '92998-3874').map((user) => user.email);

//         console.log(user);

//     } catch (error) {

//     }
// }
// getdata();


//Data fetch hone ke baad, users ka website ka ek naya array banao using map method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);
//         const website = data.map((user) => user.website);
//         console.log(website);
//     } catch (error) {

//     }
// }
// getdata();



// Data fetch hone ke baad, users ka array mein se un users ko remove karo jo city "Kulas Light" mein rehte hain using filter and splice methods.
// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);
//         data = data.filter((user) => user.city !== 'Kulas Light');
//         console.log(data);


//     } catch (error) {

//     }
// }
// getdata();



//  Data fetch hone ke baad, users ka ek naya array banao jo unke address ko full address string mein convert karta ho using map method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);

//         const address = data.map(user => `${user.address.street}, ${user.address.zipcode}`);
//         console.log(address);

//     } catch (error) {

//     }
// }
// getdata();
