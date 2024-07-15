// link: jsonplaceholder.typicode.com / users


// Data fetch hone ke baad, pehle user ka name extract karo using object destructuring.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();
//     // console.log(data);

//     const [{ name: firstname }] = data;
//     console.log(`first user name:`, firstname);
// }
// getdata();

// Data fetch hone ke baad, user jiska id 3 hai, uska address extract karo using object destructuring.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));

//         data = await responce.json();
//         // console.log(data);

//         const user = data.find(user => user.id === 3);
//         const { address } = user;
//         console.log(address);


//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, pehle user ka email extract karo using object destructuring.

// const getdata = async () => {
//     try {

//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         console.log(data[0].email);

//         const { email } = users.reduce((acc, user) => {
//             return user.id === 1 ? user : acc;
//         }, {});

//         console.log(email);
// } catch (error) {

// }

// }
// getdata();

// Data fetch hone ke baad, aakhri user ka website extract karo using object destructuring.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();
//     // console.log(data);

//     const { website } = data.reduce((acc, user) => user, {});
//     console.log(website);
// }
// getdata();

// Data fetch hone ke baad, har teesra (multiple of 3) user ka name ka array banao.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));

//     data = await responce.json();
//     // console.log(data);

//     const names = data.reduce((acc, user, index) => {
//         if ((index + 1) % 3 === 0) {
//             acc.push(user.name);
//         }
//         return acc;
//     }, []);
//     console.log(names);
// }

// getdata();

// Data fetch hone ke baad, har teesra(multiple of 3) user ka company name ka array banao.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);

//         const companyNames = data.reduce((acc, user, index) => {
//             if ((index + 1) % 3 === 0) {
//                 acc.push(user.company.name);
//             }
//             return acc;
//         }, []);

//         console.log(companyNames);

//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, har teesra(multiple of 3) user ka username ka array banao.
// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));

//     data = await responce.json();
//     // console.log(data);

//     const username = data.reduce((acc, user, index) => {
//         if ((index + 1) %3 === 0) {

//             acc.push(user.username);
//         }
//         return acc;
//     }, []);
//     console.log(username);
// }
// getdata();


// Data fetch hone ke baad, paanchve user ka phone aur email extract karo using object destructuring.
// const getdata = async () => {
//     const respocne = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await respocne.json();
//     // console.log(data);

//     const { phone, email } = data.reduce((acc, user, index) => {
//         if (index === 4) {
//             return user;
//         }
//         return acc;
//     }, {});

//     console.log(`Phone: ${phone}, Email: ${email}`);
// }
// getdata();


// Data fetch hone ke baad, doosre user ka address.city aur address.zipcode extract karo using object destructuring.
// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);

//         const { city, zipcode } = data.reduce((acc, user, index) => {
//             if (index === 1) {
//                 const { address: { city, zipcode } } = user;
//                 return { city, zipcode };
//             }
//             return acc;
//         }, {});

//         console.log(`City: ${city}, Zipcode: ${zipcode}`);


//     } catch (error) {

//     }
// }
// getdata();




// Data fetch hone ke baad, saathve user ka company.name aur company.catchPhrase extract karo using object destructuring.

// const getdata = async() => {
//     try {

//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))

//         data = await responce.json();
//         // console.log(data);
//         const { company: { name, catchPhrase } } = data.reduce((acc, user, index) => {
//             if (index === 5) {
//                 return user;
//             }
//             return acc;
//         }, {});

//         console.log(`Company Name: ${name}`);
//         console.log(`Catch Phrase: ${catchPhrase}`);


//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, chauthe user ka address.geo extract karo using object destructuring.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))

//     data = await responce.json();
//     // console.log(data);

//     const { address: { geo } } = data.reduce((acc, user, index) => {
//         if (index === 3) {
//             return user;
//         }
//         return acc;
//     }, {});
//     console.log(`Geo:`, geo);
// }

// getdata();

// Data fetch hone ke baad, har teesra (multiple of 3) user ke address.street ka array banao.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))

//     data = await responce.json();
//     // console.log(data);
//     const street = data.reduce((acc, user, index) => {
//         if ((index + 1) % 3 === 0) {
//             acc.push(user.address.street);
//         }
//         return acc;
//     }, []);
//     console.log(street);

// }
// getdata();



// Data fetch hone ke baad, users ka ek naya array banao jo city "South Christy" mein rehte hain using filter method.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();
//     // console.log(data);

//     const usersInSouthChristyReduce = data.reduce((acc, user) => {
//         if (user.address.city === 'South Christy') {
//             acc.push(user);
//         }
//         return acc;
//     }, []);

//     console.log(usersInSouthChristyReduce);

// }
// getdata();

// Data fetch hone ke baad, users ka ek naya array banao jinka company name "Romaguera-Crona" hai using filter method.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();
//     // console.log(data);

//     const usersRomagueraCronaReduce = users.reduce((acc, user) => {
//         if (user.company.name === 'Romaguera-Crona') {
//             acc.push(user);
//         }
//         return acc;
//     }, []);

//     console.log(usersRomagueraCronaReduce);

// }
// getdata();



// Data fetch hone ke baad, users ka array se 3 users ko remove karo starting from index 2 using splice method.

// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();

//     console.log('Original users array:', data);

//     data.splice(2, 3);

//     console.log('Updated users array:', data);
// }
// getdata();


// Data fetch hone ke baad, users ka ek naya array banao jo pehle 5 users ko contain karta ho using slice method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);
//         const user = data.slice(0, 5);
//         console.log(user);

//     } catch (error) {

//     }
// }
// getdata();


// Data fetch hone ke baad, users ka name ka ek naya array banao using reduce method.
// const getdata = async () => {
//     const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//     data = await responce.json();
//     // console.log(data);
//     const userNames = data.reduce((acc, user) => {
//         acc.push(user.name);
//         return acc;
//     }, []);

//     console.log('Array of user names:', userNames);
// }
// getdata();

// Data fetch hone ke baad, users ka ek naya array banao jo users ke email contain karta ho jin ka address.zipcode "92998-3874" hai using filter and map methods.

// const getdata = async () => {
//     try {
//         const respocne = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await respocne.json();
//         // console.log(data);

//         const email = data.filter(user => user.address.zipcode === '92998-3874').map(user => user.email);
//         console.log(email);


//     } catch (error) {

//     }
// }
// getdata();




// Data fetch hone ke baad, users ka company.name ka ek naya array banao jinka address.city "Lebsackbury" hai using filter and reduce methods.

// const getdata = async()=> {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);
//         const companyNames = users
//             .filter(user => user.address.city === 'Lebsackbury')
//             .reduce((acc, user) => {
//                 acc.push(user.company.name);
//                 return acc;
//             }, []);

//         console.log('Array of company names with city Lebsackbury:', companyNames);


//     } catch (error) {

//     }
// }
// getdata();


// Data fetch hone ke baad, users ka username ka ek naya array banao jo pehle 3 users ko contain karta ho jinka city "South Christy" hai using filter and slice methods.
// const getdata = async () => {
//     try {

//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);
//         const usercity = data.filter(user => user.address.city === 'South Christy');

//         const username = usercity.slice(0, 3).map(user => user.username);
//         console.log(username);


//     } catch (error) {

//     }
// }
// getdata();



// Data fetch hone ke baad, users ka website ka ek naya array banao using map method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         console.log(data);

//         const websites = data.map(user => user.website);

//         console.log('Array of user websites:', websites);



//     } catch (error) {

//     }
// }
// getdata();




// Data fetch hone ke baad, users ka ek naya array banao jinka phone "(254)" se start hota hai using filter method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);

//         const phone = data.filter(user => user.phone.startsWith('(254)'));

//         console.log(phone);

//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, users ka sab username ko ek string mein concatenate karo using reduce method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);

//         const user = data.reduce((acc, user) => {
//             return acc + user.username;
//         }, '');
//         console.log(user);

//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, users ka array mein ek naya user add karo at index 5 using splice method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);
//         const newUser = {
//             id: 11,
//             name: 'New User',
//             username: 'new_user',
//             email: 'new_user@example.com',
//             address: {
//                 street: '123 New Street',
//                 suite: 'Suite 101',
//                 city: 'New City',
//                 zipcode: '12345',
//                 geo: {
//                     lat: '0',
//                     lng: '0'
//                 }
//             },
//             phone: '123-456-7890',
//             website: 'example.com',
//             company: {
//                 name: 'Example Company',
//                 catchPhrase: 'Example catch phrase',
//                 bs: 'Example BS'
//             }
//         };

//         // Add the new user at index 5 using splice
//         data.splice(5, 0, newUser);

//         console.log('Updated users array with new user at index 5:', data);



//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, users ka ek naya array banao jo middle 4 users ko contain karta ho using slice method.
//  const getdata = async () => {
//      try {        const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);

//      const start = Math.floor(data.length / 2) - 2;
// const end = start + 4;
// const middleUsers = data.slice(start, end);

// console.log('Array of middle 4 users:', middleUsers);

//      } catch (error) {

//               }
//      }
//  getdata();



// Data fetch hone ke baad, users ka email ka ek naya array banao jinka address.zipcode "59590-4157" hai using filter and map methods.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))

//         data = await responce.json();
//         // console.log(data);

//         const filteremail = data.filter(user => user.address.zipcode === '59590-4157').map(user => user.email);

//         console.log(filteremail);

//     } catch (error) {

//     }
// }
// getdata();


// Data fetch hone ke baad, ek object banao jisme keys username aur values email ho using reduce method.

// const getdata = async () => {
//     try {
//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))
//         data = await responce.json();
//         // console.log(data);

//         const usernameEmailMap = data.reduce((acc, user) => {
//             acc[user.username] = user.email;
//             return acc;
//         }, {});

//         console.log(usernameEmailMap);
//     } catch (error) {

//     }
// }
// getdata();



// Data fetch hone ke baad, users ka ek naya array banao jo aakhri 3 users ko contain karta ho using slice method.
// const getdata = async () => {
//     try {

//     } catch (error) {

//     }
// }


// Data fetch hone ke baad, users ka array mein se un users ko remove karo jo city "Kulas Light" mein rehte hain using filter and splice methods.

// const getdata = async () => {
//     try {

//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"))

//         data = await responce.json();
//         // console.log(data);

//         const filter = data.filter(user => user.address.street !== 'Kulas Light');

//         data.forEach((user,index) => {
//             if (user.address.street === 'Kulas Light') {
//                 data.splice(index, 1);
//  }
//         });
//         console.log(filter);

//     } catch (error) {

//     }
// }
// getdata();

// Data fetch hone ke baad, users ka ek naya array banao jo unke address ko full address string mein convert karta ho using map method.

// const getdata = async () => {
//     try {

//         const responce = await fetch(("https://jsonplaceholder.typicode.com/users"));
//         data = await responce.json();
//         // console.log(data);
//         const usersWithFullAddress = data.map(user => {
//             const fullAddress = `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}`;
//             return {
//                 ...user,
//                 fullAddress: fullAddress
//             };
//         });

//         console.log(usersWithFullAddress);

//     } catch (error) {

//     }
// }
// getdata();