const array = [{
    title: 'Go for Workout',
    isDone:false
},{
    title: 'take breakfast',
    isDone: true
},{
    title: 'check homework',
    isDone:true
},{
    title: 'take lunch',
    isDone: true,
    
},{
    title: 'take sleep',
    isDone:false
},{
    title:'meeting with ajay',
    isDone:false
}]

const yugant={
     fun:function(yug){
         return yug
     }    
}
const falseChecker = array.filter((todo)=>todo.isDone === false) 

falseChecker.forEach(function(to,i){
    console.log(`Please do the routine of ${to.title}`);
})

for(let i=0;i<falseChecker.length;i++)
{
     console.log(falseChecker[i].title);
     
}

console.log(yugant.fun('ghochu'));

// NOTE:- arrow function is not used when we used this keyword inside object
