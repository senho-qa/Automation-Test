// Exercise 1 :  Create an object named `person` with the following properties ( name, age,job, city ...), print the value of properties 
// Exercise 2: Add / Update / Delete Properties ( example in exercise 1) 
// Exercise 3 : Loop Through an Object (Use a `for...in` loop to print all keys and their values, using example in exercise 1)
// Exercise 4 : Use `map()` to create a new array with each number multiplied by 2 (const numbers = [1, 2, 3, 4, 5]; ) 
// Exercise 5 : Use `filter()` to get a list of ages that are 18 or older ( const ages = [12, 17, 19, 21, 15, 30]; )
// Exercise 6 : Use `find()` to get the first product with a price greater than 1000 (const products = [
//   { id: 1, name: ""Phone"", price: 700 },
//   { id: 2, name: ""Tablet"", price: 1200 },
//   { id: 3, name: ""Laptop"", price: 1500 }
// ]; ) 
// Exercise 7 : Use `includes()` to check if ""green"" is in the array (const colors = [""red"", ""green"", ""blue"", ""yellow""];) 
// Exercise 8 : Use `filter()` to get scores greater than or equal to 50 (const scores = [45, 60, 70, 30, 90, 50];) 

// Execise 9 : const users = [
//   { id: 1, name: ""Alice"", active: true },
//   { id: 2, name: ""Bob"", active: false },
//   { id: 3, name: ""Charlie"", active: true }
// ];

//  1. Use `filter()` to get only active users
//  2. Use `map()` to return an array of just their names
//  3. Use `includes()` to check if ""Charlie"" is in the resulting name array

//~~~~~~~~~~~~~~~~~~~~~~~~~~


//ex1:Create an object named `person` with the following properties ( name, age,job, city ...), print the value of properties 
let person = {
    name: 'Le Nguyen',
    age: 25,
    job: 'Quality Assurance',
    city: 'Da Nang'
}

console.log(person.name);
console.log(person.age);
console.log(person.job);
console.log(person.city);


//Cach 2: for in
for (let key in person) {
    console.log(person[key])
}