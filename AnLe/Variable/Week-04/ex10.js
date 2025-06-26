// Exercise 10 :Create an async function that waits 2 seconds and then logs "Hello"

setTimeout(() => {
    console.log('Hello')
}, 2000);

///////////////////////////////////

function hello() {
    console.log('Welcome to Viet Nam');
}
function chao() {
    console.log('Chào mừng bạn, chúc 1 ngày tốt lành.');
}
setTimeout(hello, 3000);
setTimeout(chao, 4000);