// Exercise 12. Give an array : const numbers = [1, 2, 3, 4, 5]; Print the running total after each number, with 1-second delay

const numbers = [1, 2, 3, 4, 5];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function totalNumber() {
    let total = 0;
    for(let number of numbers) {
        total += number;
        console.log(total);
    await delay(1000);
    }
}
totalNumber();