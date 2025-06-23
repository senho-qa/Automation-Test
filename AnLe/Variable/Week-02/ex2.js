//Exercise 2: Thêm / Cập nhật / Xóa thuộc tính trong object → Dùng ví dụ từ Ex 1

const person = {
    name: 'Anle',
    age: 28,
    job: 'QA Engineer',
    city: 'Da Nang',
}

    //Thêm thuộc tính company
    person.company = 'Enouvo IT Solution';

    // Cập nhật tuổi 
    person.age = '01/09/1997'

    // Xóa city
    delete person.city;

console.log(person.company);
console.log(person.age);
