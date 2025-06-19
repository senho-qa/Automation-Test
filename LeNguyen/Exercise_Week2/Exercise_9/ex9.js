// Execise 9 : const users = [
//   { id: 1, name: ""Alice"", active: true },
//   { id: 2, name: ""Bob"", active: false },
//   { id: 3, name: ""Charlie"", active: true }
// ];

//  1. Use `filter()` to get only active users
//  2. Use `map()` to return an array of just their names
//  3. Use `includes()` to check if ""Charlie"" is in the resulting name array


//  1. Use `filter()` to get only active users
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

const activeUser = users.filter(user => {
    return user.active === true;
});

console.log(activeUser);

//2 Use `map()` to return an array of just their names
const names = users.map(user => {
    return user.name;
})

console.log(names);

//3. Use `includes()` to check if ""Charlie"" is in the resulting name array
const hasCharlie = names.includes('Charlie');
console.log(hasCharlie);