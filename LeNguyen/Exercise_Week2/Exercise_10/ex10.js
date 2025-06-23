// 10. Create an async function that waits 2 seconds and then logs "Hello"
async function sayHello() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello');
    }, 2000);
  });
  console.log(data);
}

sayHello();