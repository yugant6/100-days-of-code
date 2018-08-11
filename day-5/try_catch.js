// suppose if user enters something wrong but we don't want to stop them to enter the website then

//const converter = (dollar)=>{
  //  return dollar*64
//}

//const myValue = converter(5)
//console.log(myValue)

//const value = converter('five')
//console.log(value);

const converter =(dollar)=>{
    if(typeof dollar ==='number'){
        return dollar *64
}
else{
    return 'invalid input'
}}
console.log(converter('five'));
// but it just give message what i write in console log

const converter2 =(dollar)=>{
    if(typeof dollar ==='number'){
        return dollar *64
}
else{
    throw Error('Amount needs to be enter in number')
}}
//console.log(converter2('five'));

// throw also print error in program but alse freezes the program

try{
    console.log(converter2(5));
}catch(e){
console.log(e);
}

try{
    console.log(converter2('five'));
}catch(e){
console.log(e);
}

console.log('I wil run even error is given');

