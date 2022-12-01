let obj = {
    firstName: "Jack",
    lastName: "Smith",
    age: 25
};//JavaScript Key ไม่จำเป็นต้องอยู่ใน Double Quote ก็ได้

//POV : ส่งข้อมูลไปที่เซิฟเวอร์
let myJSON = '{"firstName" : "Sam","lastName" : "Smith","age" : 33}';

//แปลง String เป็น Object ด้วยคำสั่ง JSON.parse 
let myObj = JSON.parse(myJSON);

console.log("myObj",typeof(myObj));
console.log(myObj.firstName);