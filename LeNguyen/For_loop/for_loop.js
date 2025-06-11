let myArray = [
    'Orange',
    'Apple',
    'Lemon',
    'Banana',
    'Coconut'
];

let arrayLength = myArray.length;

for (let i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

//for of
for (let key of myArray) {
    console.log(key);
}

//for each
myArray.forEach(function(item, index, array){
    console.log(item + ' ' + index + ' ' + array);
}) 