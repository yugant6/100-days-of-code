console.log('5'-5);  // concept of coercian(javascript automatically give correc result)
console.log('5'+5);

const giveType = typeof '5'
console.log(giveType);

const giveType2 = typeof {}
console.log(giveType2);

const adder = true + 5
console.log(adder); // as true is taken as 1

const add = false + 5
console.log(add);  // false taken as 0

const loginId =[]

const loginDetails = loginId[0]
if(loginDetails==undefined)
{
    console.log('Invalid User');
    
}
else{
    console.log('Valid User');


}
if(''){   // empty string taken false
    console.log('InValid');        
    
}


// Values taken as false
//false
//0
// ''
//null
//undefined
// other than this all is true