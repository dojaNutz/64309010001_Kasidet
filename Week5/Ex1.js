let order =[ {
    "Customer" : "Mr.Lee",
    "itemOrder" : ["A4 paper", "Ruler"],
    "Qty" : [5,2],
    "Price" : [120, 25]
},
{
    "Customer" : "Mr.Yue",
    "itemOrder" : ["Flash Drive", "A4 paper"],
    "Qty" : [2,3],
    "Price" : [130, 120]
},
{
    "Customer" : "Mr.Araikormairuni",
    "itemOrder" : ["Flash Drive", "A4 paper","Ruler"],
    "Qty" : [2,3,2],
    "Price" : [130, 120,25]
}
]

for ( i=0; i<order.length; i++){
    let sum =0;
    for (let j=0; j<order[i].itemOrder.length;j++){
        sum += order[i].Qty[j]*order[i].Price[j];
    }
    console.log(order[i].Customer, sum);
}