// Exercise 1 : Given a temperature value, print: (if/else)

// - "Cold" if it's less than 15
// - "Cool" if it's between 15 and 25
// - "Hot" if it's more than 25

// Exercise 2 : Input a number (1–12) and use a switch-case to print the name of the month. (switch-case)
// Exercise 3 : Given an array of numbers, find the largest one using a for loop (for)
// Exercise 4 : Given an array of fruits, use .pop() to remove the last item and print it. (array)
// Exercise 5 : Use forEach to convert all strings in an array to uppercase and store them in a new array.(array)
// Exercise 6 :  Write a function isTest that takes a number and returns true if it's even, otherwise false.(function)

// Exercise 1
var a = 16;

if (a < 15) {
    console.log('Cold')
} else if (a >= 15 && a <= 25){
    console.log('Cool')
} else if (a > 25) { //else
    console.log('Hot')
}
