numOne=32
numTwo = 31

result= 32/31

console.log(result);
console.log(result.toFixed(2));//fixed twp digits
console.log(Math.floor(result.toFixed(2)));
console.log(Math.ceil(result.toFixed(2)));
console.log(Math.random()); //generate random number between 0 and 1
console.log(Math.random()*10);


let upper = 6
let lower  = 1

let myRandom = Math.ceil(Math.random() * (upper-lower+1))
console.log(myRandom);
