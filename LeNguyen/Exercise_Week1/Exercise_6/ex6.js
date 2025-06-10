// Exercise 6 :  Write a function isTest that takes a number and returns true if it's even, otherwise false.(function)

function isTest(number) {
    if (number %2 === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isTest(30)); //output: true
console.log(isTest(15)); //output: false