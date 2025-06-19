// Exercise 4: Dùng map() để tạo mảng mới với mỗi số nhân 2,
// ví dụ: const numbers = [1, 2, 3, 4, 5];

const numbers = [1,2,3,4,5]
function doubled (numbers) {
    return numbers *2
    };
let result = numbers.map(doubled);
console.log(result);