// Exercise 2: Add / Update / Delete Properties ( example in exercise 1) 
let person = {
    name: 'Le Nguyen',
    age: 25,
    job: 'Quality Assurance',
    city: 'Da Nang'
}

//Add properties
person.color = 'green';
person.email = 'le.nguyen@enouvo.com';
// console.log(person);

//Update Properties
person.age = 18;
// console.log(person);

//Delete Properties
delete person.city;
console.log(person);

