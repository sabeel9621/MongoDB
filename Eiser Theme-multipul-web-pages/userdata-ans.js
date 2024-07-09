// How many documents are there in the collection ?
//     ans.=>
// console.log(userdata.length);
// -------------------------------------------------------

//     Retrieve all documents where the role is "admin".
//         ans.=>
// const ad = userdata.filter((user) => user.role == "admin");
// console.log(ad)

// --------------------------------------------------------------------------
//     Find all documents where the role is "customer" and the username contains "Karamchandani".
//         ans.=>
// const karm = userdata.filter((user) =>
//     user.role == "customer" && user.username.includes("Karamchandani"));
// console.log(karm)
// -----------------------------------------------
//     Retrieve the document with the username "Sumanth Rao".
//         ans.=>
// const kasumantraom = userdata.filter((user) => user.username == "Sumanth Rao");
// console.log(kasumantraom)
// ---------------------------------------------------------------
//     Find all documents where the user's first name starts with "R".

// ans.=>
// const r = userdata.filter((user) => user.username.startsWith("R"));
// console.log(r)
//     -* -------------------------------------------------------------
//         Retrieve all documents where the user has the skill "Python".
//             ans.=>
// const sk = userdata.filter((user) => user.skills.includes("Python"));
// console.log(sk);
// ---------------------------------------------------------
//     Find all documents where the user has the skill "Java" and "Python".
//         ans.=>
// const sk = userdata.filter((user) => user.skills.includes("Python") && user.skills.includes("Java"));
// console.log(sk);
// --------------------------------------------------------------------------------------
//     Retrieve all documents where the user's first name is "Aryan" or the last name is "Gupta".
// ans.=>
// const name = userdata.filter((user) => {
//     return user.firstName == "Aryan" || user.lastName == "Gupta"
// });
// console.log(name)
// --------------------------------------------------------------------
//     Find all documents where the user has the skill "Java" but not "Python".
//         ans.=>
// const sk = userdata.filter((user) => user.skills.includes("Java") && !user.skills.includes("Python"));
// console.log(sk);
// --------------------------------------------------------
//     Retrieve all documents where the user's last name is "Sharma" and the role is "customer".
// ans.=>
// const sk = userdata.filter((user) => user.lastName == "Sharma" && user.role == "customer");
// console.log(sk);
// ------------------------------------------
//     Find all documents where the user has exactly three skills.
//         ans.=>
// const sk = userdata.filter((user) => user.skills.length == 3);
// console.log(sk);
// ------------------------------------------------------------
//     Retrieve all documents where the user's first name starts with "S" and the role is "admin".
// ans.=>
// const sk = userdata.filter((user) => user.firstName.startsWith("S") && user.role == "customer");
// console.log(sk);
// -------------------------------
//     Find all documents where the user has the skill "Java" and the role is not "admin".
//         ans.=>
// const sk = userdata.filter((user) => user.skills.includes("Java") && !user.role == "admin");
// console.log(sk);
// --------------------------------------------------------------
//     Retrieve all documents where the user's role is not specified.
// ans.=>
// const sk = userdata.filter((user) => user.role == "undefined" || user.role == "Null");
// console.log(sk);
// ------------------------------------------------------------
//     Find all documents where the user has at least four skills.
//         ans.=>
// const sk = userdata.filter((user) => user.skills.length >= 4);
// console.log(sk);
// -----------------------------------------------

//     Retrieve all documents where the user's role is "customer" and the user has no specified skills.
// ans.=>
// const sk = userdata.filter((user) => user.role == "customer" && user.skills.length == 0);
// console.log(sk);
// -----------------------------------------------------
//     Find all documents where the user's email contains "regexsoftware.com".
// ans.=>
// const sk = userdata.filter((user) => user.useremail.includes("regexsoftware.com"));
// console.log(sk);
// ----------------------------------------------
//     Retrieve all documents where the user's email does not contain "gmail.com".
// ans.=>
// const sk = userdata.filter((user) => !user.useremail.includes("gmail.com"));
// console.log(sk);
// ---------------------------------------------
//     Find all documents where the user's last name is not "Singh".
// ans.=>
// const sk = userdata.filter((user) => user.lastName != "Singh");
// console.log(sk);
// -----------------------------------------------
//     Retrieve all documents where the user's role is "admin" and the user has the skill "Java".
// ans.=>
// const sk = userdata.filter((user) => user.role == "admin" && user.skills.includes("Java"));
// console.log(sk);
// ----------------------------------------------------------
//     Find all documents where the user's first name is "Ananya" and the user's role is "customer".
//         ans.=>
// const sk = userdata.filter((user) => user.firstName == "Ananya" && user.role == "customer");
// console.log(sk);
// ----------------------------------------------------------
//     Retrieve all documents where the user's role is "admin" and the user has at least one skill.
// ans.=>
// const sk = userdata.filter((user) => user.skills.length >= 1 && user.role == "customer");
// console.log(sk);
// ------------------------------------------------------
//     Find all documents where the user's role is "admin" and the user's first name starts with "R".
//         ans.=>
// const sk = userdata.filter((user) => user.firstName.startsWith("R") && user.role == "admin");
//             console.log(sk);
//             ----------------------------------------------------------------------------------------------
//                 Retrieve all documents where the user's role is "customer" and the user's last name is "Patel".
//                     ans.=>
//             const sk = userdata.filter((user) => user.lastName == "Patel" && user.role == "customer");
//             console.log(sk);
//             ----------------------------------------------------------------
//                 Find all documents where the user's role is "admin" and the user has the skill "Python".
//             ans.=>
//             const sk = userdata.filter((user) => user.skills.includes("Python") && user.role == "admin");
//             console.log(sk);
//             -----------------------------------------------------
//                 Retrieve all documents where the user's role is "customer" and the user's last name is not "Gupta".
//                     ans.=>
//             const sk = userdata.filter((user) => user.lastName1 != "Gupta" && user.role == "customer");
//             console.log(sk);
//             ----------------------------------------------------------
//                 Find all documents where the user's role is "admin" and the user's email ends with "@regexsoftware.com".
//                     ans.=>
// const sk = userdata.filter((user) => user.useremail.endsWith("@regexsoftware.com") && user.role == "admin");
//                         console.log(sk);
//                         -----------------------------------------------------------------
//                             Retrieve all documents where the user's role is "customer" and the user has the skill "React".
//                         ans.=>
//                         const sk = userdata.filter((user) => user.skills.includes("React") && user.role == "customer");
//                         console.log(sk);
//                         ---------------------------------------------------------------------
//                             Find all documents where the user's role is "customer" and the user has the skill "SQL".
//                         ans.=>
//                         const sk = userdata.filter((user) => user.skills.includes("SQL") && user.role == "customer");
//                         console.log(sk);
//                         ------------------------------------------
//                             Retrieve all documents where the user's role is "admin" and the user has at least three skills.
//                         ans.=>
//                         const sk = userdata.filter((user) => user.skills.length >= 3 && user.role == "admin");
//                         console.log(sk);
//                         ----------------------------------------
//                             Find all documents where the user's role is "customer" and the user has the skills "Java" and "C++".
//                         ans.=>
//                         const sk = userdata.filter((user) => user.skills.includes("Java", "C++") && user.role == "customer");
//                         console.log(sk);
//                         ------------------------------------------------------------
//                             Retrieve all documents where the user's role is "admin" and the user's email does not contain "gmail.com".
//                                 ans.=>
//                         const sk = userdata.filter((user) => user.useremail.includes("gmail.com") && user.role == "admin");
//                         console.log(sk);
//                         ------------------------------------------------------------------------
//                             Find all documents where the user's role is "customer" and the user's last name starts with "M".
//                                 ans.=>
//  const sk = userdata.filter((user) => user.lastName.startsWith("M") && user.role == "customer");
//                                     console.log(sk);
//                                     -------------------------------------------------------
//                                         Retrieve all documents where the user's role is "admin" and the user's first name is not "Rahul".
//                                             ans.=>
//                                     const sk = userdata.filter((user) => user.firstName != "Rahul" && user.role == "admin");
//                                     console.log(sk);
//                                     -----------------------------------------------
//                                         Find all documents where the user's role is "customer" and the user's email does not contain "gmail.com".
//                                             ans.=>
//                                     const sk = userdata.filter((user) => !user.useremail.includes("gmail.com") && user.role == "customer");
//                                     console.log(sk);
//                                     -----------------------------------------------------
//                                         Retrieve all documents where the user's role is "admin" and the user has the skill "Java" but not "JavaScript".
//                                     ans.=>
//                                     const sk = userdata.filter((user) => user.skills.includes("Java") && !user.skills.includes("JavaScript") && user.role == "admin");
//                                     console.log(sk);
//                                     -------------------------------------------------------------------
//                                         Find all documents where the user's role is "customer" and the user's first name is not "Ananya".
//                                             ans.=>
//                                     const sk = userdata.filter((user) => user.firstName != "Ananya" && user.role == "customer");
//                                     console.log(sk);
//                                     ----------------------------------------------------------------------
//  Retrieve all documents where the user's role is "admin" and the user's email contains "regexsoftware.com".
//            ans.=>
//const sk = userdata.filter((user) => user.useremail.includes("regexsoftware.com") && user.role == "admin");
//                                     console.log(sk);
//                                     ----------------------------------------------
//                                         Find all documents where the user's role is "customer" and the user has the skill "HTML" but not "CSS". '
//                                     45
//                                     ans.=>
//                                     const sk = userdata.filter((user) => user.skills.includes("HTML") && !user.skills.includes("CSS") && user.role == "customer");
//                                     console.log(sk);
//                                     -----------------------------
//                                         Retrieve all documents where the user's role is "admin" and the user has the skill "Java" and "JavaScript".
//                                     ans.=>
//                                     const sk = userdata.filter((user) => user.skills.includes("Java", "JavaScript") && user.role == "admin");
//                                     console.log(sk);
//                                     ----------------------------------------
//                                         Find the average age of users.
// Find all female users from Jaipur who know Python.
// Find all male users in Delhi who are above age 26
// Find all users who are from either New Delhi or Mumbai.
// Find all users who have the same last name.
// Find the count of users in each city.
// How many users are from New Delhi ?
//                                         How many Female users are from Jaipur ?
//                                             How many Male users are there in Delhi who have skills Java ?
//                                                 How many users are from Hyderabad having age greater than 24 and have skill Python, C++
// How many female users are from Goa having age greater than 24 and have skill Python, C++