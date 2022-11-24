let obj = [{
    "employeeID" : "10001",
    "name": "นางสาวชนิสา ไกรรอด",
    "department": "ไอที",
    "position" : "System Engineer",
    "salary" : 42000,
    "bonus": "S",
}, {
    "employeeID" : "10002",
    "name": "นางวศพล สิริอนันต์",
    "department": "ไอที",
    "position" : "System Engineer",
    "salary" : 13000,
    "bonus": "A",
}, {
    "employeeID" : "10003",
    "name": "นางสาวจิราพร อินทรประเสริฐ",
    "department": "ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 9000,
    "bonus": "C",
}, {
    "employeeID" : "10004",
    "name": "นางสาวพิมพา กาญจนมาศ",
    "department": "ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 21000,
    "bonus": "S",
}, {
    "employeeID" : "10005",
    "name": "นายจิรโชติ วัฒนโกศล",
    "department": "ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 22000,
    "bonus": "A",
}, {
    "employeeID" : "10006",
    "name": "นายธัชพล ขจรเกียรติสกุล",
    "department": "การเงิน",
    "position" : "Account",
    "salary" : 12000,
    "bonus": "S",
}, {
    "employeeID" : "10007",
    "name": "นางธนวิทย์ สุวรรณโชติ",
    "department": "การเงิน",
    "position" : "Account",
    "salary" : 14000,
    "bonus": "A",
}, {
    "employeeID" : "10008",
    "name": "นางพัชรียา สำราญทรัพย์",
    "department": "การเงิน",
    "position" : "Account",
    "salary" : 50000,
    "bonus": "C",
}, {
    "employeeID" : "10009",
    "name": "นางสาวขวัญชนก ธาดาวรวงศ์",
    "department": "ไอที",
    "position" : "System Engineer",
    "salary" : 16000,
    "bonus": "A",
}
];

let sum =0;
for ( i=0; i<obj.length; i++){
        sum += obj[i].salary*12;
        console.log(obj[i].name,sum);
    }