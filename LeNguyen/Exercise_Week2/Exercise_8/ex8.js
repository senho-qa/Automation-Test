// Exercise 8 : Use `filter()` to get scores greater than or equal to 50 (const scores = [45, 60, 70, 30, 90, 50];) 
const scores = [45, 60, 70, 30, 90, 50];

const score = scores.filter(function(i) {
    return i >= 50;
})

console.log(score);