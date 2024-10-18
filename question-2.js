const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

let totalScore = students
  .filter((checkScore) => checkScore.score > 50)
  .map((increaseScore) => increaseScore.score * 0.1 + increaseScore.score)
  .reduce((acc, cur) => acc + cur, 0);

console.log(`Total score is  ${totalScore}`);

// เริ่มเขียนโค้ดตรงนี้
// ให้เขียนโปรแกรมโดยใช้ Built-in Array Function ดังนี้
// ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50
// ให้เพิ่มคะแนนนักเรียนแต่ละคน 10%
// ให้รวมคะแนนทั้งหมดของนักเรียนที่เหลืออยู่ และที่ถูกเพิ่มคะแนนคนละ 10% ไปก่อนหน้านี้ (โดยใช้ Built-in Array Function)
// ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ
// "Total score is <ค่าของคะแนนที่รวมแล้ว>" (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)
// ยกตัวอย่างเช่น
// // ถ้า students มีค่าตามนี้
// const students = [
//   { name: 'Alice', score: 42 },
//   { name: 'Bob', score: 55 },
//   { name: 'Charlie', score: 68 },
//   { name: 'David', score: 48 },
//   { name: 'Eve', score: 91 }
// ];

// // โปรแกรมของเราต้องแสดงผลออกมาว่า
// "Total score is 235.4"

// // ถ้าใครได้ "Total score is 235.40000000000003" ถือว่าโอเค
