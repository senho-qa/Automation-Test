// Exercise 8: Dùng filter() để lấy các điểm ≥ 50,
//  ví dụ: const scores = [45, 60, 70, 30, 90, 50];"

const scores = [45, 60, 70, 30, 90, 50];
let newScore = scores.filter(x => x >= 50);
console.log(newScore);