// Exercise 5 : Use forEach to convert all strings in an array to uppercase and store them in a new array.(array)
// let arr = ['Hello', 'today is Monday'];

// arr.forEach(function(i, index, array) {
//     console.log(i.toUpperCase() + ' ' + index +' '+ array);
// });

let arr = ['Hello', 'today is Monday'];
let upperArr = [];

arr.forEach(function(value) {
    upperArr.push(value.toUpperCase());
});

console.log(upperArr); 
