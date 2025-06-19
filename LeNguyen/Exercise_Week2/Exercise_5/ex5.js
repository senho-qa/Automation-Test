// Exercise 5 : Use `filter()` to get a list of ages that are 18 or older ( const ages = [12, 17, 19, 21, 15, 30]; )
const ages = [12, 17, 19, 21, 15, 30];

const result = ages.filter(function(age) {
    return age >= 18;
});

console.log(result);