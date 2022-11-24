var obj = {
    "firstName": "John",
    "lastName": "Olsen",
    "isAlive": true,
    "age": 25,
    //เก็บข้อมูลเป็น Object
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    },
    //เก็บข้อมูลเป็น Array
    "phoneNumbers": [{
        "type": "home",
        "number": "212 555-1234"
    }, {
        "type": "office",
        "number": "646 555-4567"
    }, {
        "type": "mobile",
        "number": "123 456-7890"
    }
    ],
    "children": [],
    "spouse": null

};
/*การเข้าถึง object ต้องใช้ . เหมือนกัน
console.log(obj.address.streetAddress);*/
console.log(obj.phoneNumbers[1].number);