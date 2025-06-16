//Exercise 4 : Create an empty array. Use .push() to add the numbers 1 to 5 into it.(array)

let listNumber = [];
listNumber.push(1);
listNumber.push(2);
listNumber.push(3);
listNumber.push(4);
listNumber.push(5);
console.log(listNumber);

//Execise 5:  Use forEach to print only even numbers from an array.(array)
listNumber.forEach(function(x)
    { if(x % 2 === 0)
        console.log('Even number: ' + x);  
    }
)

//Exercise 6: Write an arrow function add that takes two numbers and returns their sum (function)

//function thường:

function add (a, b) {
    return a + b
}
console.log(add(3,4));

// arrow function: 

const add2 = (x, y) => x + y;
console.log(add2 (5,10));