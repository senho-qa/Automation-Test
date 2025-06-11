// Exercise 3 : Given an array of numbers, find the largest one using a for loop (for)
let myNumber = [1, 100, 201, 209, 122, 51, -95];
let max = myNumber[0]; 

for (let i = 0; i < myNumber.length; i++) {
    if (myNumber[i] > max){
        max = myNumber[i]
    }  
}
console.log('All numbers in myNumber:', myNumber);
console.log('The largest number in myNumber:', max);



