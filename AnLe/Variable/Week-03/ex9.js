// Exercise 9: Với const users = [ { id: 1, name: "Alice", active: true }, { id: 2, name: "Bob", active: false }, { id: 3, name: "Charlie", active: true } ]; 
// 1. Dùng filter() để lấy các user đang hoạt động (active: true) 
// 2. Dùng map() để tạo mảng chỉ chứa tên 
// 3. Dùng includes() để kiểm tra "Charlie" có trong mảng tên hay không.


const users = [ 
    { id: 1, name: "Alice", active: true }, 
    { id: 2, name: "Bob", active: false }, 
    { id: 3, name: "Charlie", active: true } 
];

let online = users.filter(stt => stt.active === true);
console.log(online);

let nameOnly = users.map(n => n.name);
console.log(nameOnly);

let check = nameOnly.includes('Charlie');
console.log(check);