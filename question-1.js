const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

const allPeople = [...techupPeople, ...techcoolPeople];
console.log(allPeople);
let totalAge = allPeople.filter((allPeople) => allPeople.age < 20);
console.log(totalAge);

// ให้เขียนโปรแกรมดังนี้
// 1) ให้รวม Object ใน Array ของ Variable techupPeople และ techcoolPeople เข้าไปใน Array allPeople โดยใช้ใช้เทคนิคของ ES6
// 2) จากนั้น ให้กรองพนักงานที่มีอายุน้อยกว่า 20 โดยใช้ Built-in Array Function
// ผลลัพธ์ของโปรแกรมควรจะแสดงแบบนี้
// [
//   { name: 'Alice', age: 17 },
//   { name: 'Charlie', age: 16 },
//   { name: 'Eve', age: 19 }
// ]
