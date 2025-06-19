// Exercise 3 : Loop Through an Object (Use a `for...in` loop to print all keys and their values, using example in exercise 1)
let person = {
    name: 'Le Nguyen',
    age: 25,
    job: 'Quality Assurance',
    city: 'Da Nang'
}

for(let key in person) {
    console.log(`${key}: ${person[key]}`);
}