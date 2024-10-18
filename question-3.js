// // เริ่มเขียนโค้ดตรงนี้
// สมมุติว่ามี Function getUsers ที่ทำหน้าที่ ดึงข้อมูล User (ผู้ใช้งานในระบบ) จาก Server ชื่อ Jsonplaceholder
// Endpoint ที่ใช้ดึงข้อมูล User คือ https://jsonplaceholder.typicode.com/users
// ให้เขียนโปรแกรมดังนี้
// ดึงข้อมูล User จาก Server ชื่อ Jsonplaceholder ด้วย Built-in fetch Function
// ให้แปลงข้อมูลที่ได้จาก Server ให้อยู่ในรูปแบบ Array ของชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัวอักษร ใช้ Built-in Array Function (Map, Filter หรือ Reduce) เช่น
// สมมุติว่าข้อมูลที่ได้จาก Server เป็นแบบนี้ (คลิกเพื่อแสดงข้อมูล)
// หลังจากการแปลงข้อมูล ผลลัพธ์ควรจะแสดงบนหน้าจอแบบนี้
// [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]

async function getUsers() {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let data = await res.json();

    console.log(data.map((data) => data.name).filter((x) => x.length > 17));
  } catch (error) {
    console.log(error);
  }
}
getUsers();
console.log(getUsers((data) => console.log(data)).catch());
