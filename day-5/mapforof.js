
var satish = {
    name:'satish',
    height:5.4,
    death:2016
}

var geeta ={
    name:'geeta',
    height:5.2,
    work:'housewife'
}

var yugant ={
    name:'yugant',
    height:5.3,
    occupation:'student'
}
//map is collection of objects providing with specific key
let users = new Map()

users.set(5,satish)
users.set(3,yugant)
users.set(9,geeta)

console.log(users);
// the map is also an object but it is more powerful as we can count number of objects inside map
console.log(users.size);
console.log(users.get(3));
console.log(users.keys());
console.log(users.values());

for (const key of users.keys()) {
    console.log(key );
    
}
for (const key of users.values()) {
    console.log(key );
    
}
for (const key of users.values()) {
    console.log(key.name);
    
}

for (const [key,value] of users.entries()) {
    console.log(key +'='+value.name);
    
}

users.forEach((value,key) =>console.log(key +'='+value.name));


let arrayOfArray = [['ty',1],['sdr',3],['fdsa',2]]

let newMap = new Map(arrayOfArray)

console.log(newMap);

for (const [key,value] of newMap.entries()) {
    console.log(key +'='+value); 
}
