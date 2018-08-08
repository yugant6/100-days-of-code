let myId1 = 'yug'
let myId2 = 'yug'
let myId3 ={}
let myId4 ={}

console.log(myId3==myId4);//false

console.log(myId1===myId2);  //true
console.log(myId3===myId4); // false
console.log({}==={}); // false

// important to remember
//double equals == check whethet the values are equal
//triple equlas check the identities ( two objects never have same identity )

myId4= myId3
console.log(myId3===myId4);//true, Now both objects are equal
console.log(myId3==myId4);//true

