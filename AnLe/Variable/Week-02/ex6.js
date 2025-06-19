// Exercise 6: Dùng find() để tìm sản phẩm đầu tiên có giá > 1000, 
// ví dụ: const products = [ { id: 1, name: ""Phone"", price: 700 }, { id: 2, name: ""Tablet"", price: 1200 }, { id: 3, name: ""Laptop"", price: 1500 } ];"

const products = [
    { id: 1, name: "Phone", price: 700 },
    { id: 2, name: "Tablet", price: 1200 },
    { id: 3, name: "Laptop", price: 1500 }
];

let newProduct = products.find(sp => sp.price > 1000);
console.log(newProduct);