const month= ['jan','feb','mar','apr','may','jun','july']

let sayHello = function(){
    console.log('Greetings');
    
}

month.forEach(sayHello)
month.forEach(function(){
    console.log('Greetings'); //prints greetings array lenght times
})

    month.forEach(function(day){
        console.log(day);  // all the values stored in day and print all array elements
        
})
month.forEach(function(day,index){  //first parameter for value in array and second for index
    console.log(`Starts with ${index+1}---${day}`);
    
})