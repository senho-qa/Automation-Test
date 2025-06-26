  
const numbers = [1, 2, 3, 4, 5];
async function getNumber(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, 1000);
  });
}

async function totalNumbers() {
  let sum = 0;
  for (let i of numbers) {
    const data = await getNumber(i);
    sum = sum + data;
    console.log(sum);
  }
}

totalNumbers();
