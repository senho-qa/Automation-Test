// Exercise 3: Duyệt qua object bằng for...in loop 
// → In ra tất cả keys và values → Sử dụng ví dụ từ Ex 1

const person = {
    name: 'Anle',
    age: 28,
    job: 'QA Engineer',
    city: 'Da Nang',
}
for (let keys in person);

for (let keys in person) {
    console.log(keys);
    console.log(person[keys]);
};
