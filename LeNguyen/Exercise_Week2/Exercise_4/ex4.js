// Exercise 4 : Use `map()` to create a new array with each number multiplied by 2 (const numbers = [1, 2, 3, 4, 5]; ) 
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(i) {
    return i * 2;
});

console.log(doubled);