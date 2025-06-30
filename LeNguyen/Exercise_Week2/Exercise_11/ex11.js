// "11. Given an array : const numbers = [1, 2, 3, 4, 5];
// - Loops through each number in the array.
// - Uses await inside the loop to simulate an asynchronous task (e.g., waiting 0.5 seconds).
// - Prints each number one by one, with a 0.5-second delay between them.

const numbers = [1, 2, 3, 4, 5];
async function getNumber(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, 500);
  });
}

async function printNumbers() {
    for (const i of numbers) {
      const data = await getNumber(i);
      console.log(data);
    }
}

printNumbers();

