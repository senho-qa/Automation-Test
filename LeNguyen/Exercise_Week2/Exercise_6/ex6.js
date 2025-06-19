// Exercise 6 : Use `find()` to get the first product with a price greater than 1000 (const products = [
//   { id: 1, name: "Phone", price: 700 },
//   { id: 2, name: "Tablet", price: 1200 },
//   { id: 3, name: "Laptop", price: 1500 }
// ]; ) 

const products = [
  { id: 1, name: "Phone", price: 700 },
  { id: 2, name: "Tablet", price: 1200 },
  { id: 3, name: "Laptop", price: 1500 }
]; 

const result = products.find(function(product) {
    return product.price > 1000;
});

console.log(result);