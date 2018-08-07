let sayHello  = function(name) {
    console.log(`Greetings for ${name}`)
    console.log(`Hey ${name}`);   
}
sayHello('john')

let adder = function(num1,num2){
     let added=num1+num2
     return added
}
console.log(adder(2,5))

let guestUser = function(name= 'unknown', count=0){ //default used if no value is assign
    return 'Hello' + name+'and your count is'+ count     
}
console.log(guestUser('John', 1)); // takeover with default values
