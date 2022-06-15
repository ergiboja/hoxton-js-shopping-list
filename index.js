
let list = [
     {itemname:'Milk' , itemprice: 1.20 },
     {itemname:'Cocoa' ,itemprice: 2}, 
     {itemname:'Salad' ,itemprice: 2},
     {itemname:'Carrots' ,itemprice: 2},
     {itemname:'Tomatoes' ,itemprice: 2.50},
     {itemname:'Ready Meals' ,itemprice: 5}
    
    ]

    let itemname = prompt("Enter New Item Name");
    
    let itemprice = Number(prompt("Enter New Item Price"));
    
list.push({itemname, itemprice})
console.log(list)



let total = 0;
for (let i = 0; i < list.length; i++){
    total += list[i].itemprice
    console.log(` ${list[i].itemname} costs £ ${list[i].itemprice}`);
    
}
console.log("Total Price", total)