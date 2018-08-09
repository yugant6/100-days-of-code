const myTodos= ['Buy Bread','Go To Gym','Eat']
console.log(myTodos.indexOf('Go To Gym'));
console.log(myTodos.indexOf('go to gym')); // Case Sensitive return -1

const newTodos=[
    {
        title:'Buy Bread',
        isDone : false,
    },{
        title:'Go To Gym',
        isDone:true,
    },{
        title:'Eat',
        isDone:true,
    }]

let findIndex= newTodos.findIndex(function(todo,index){
    return todo.title==='Go To Gym'
})

console.log(findIndex);

// if user does not care about case sensitive then what should i do
//Method 1

const method1 = function(any,titl){
    const index= any.findIndex(function(todo,x)
{
   return todo.title.toLowerCase()===titl.toLowerCase() 
})
return index
}

console.log(method1(newTodos,'Go To Gym'));

// Method 2

const method2=function(any,titl){
    const index =any.find(function(todo,x){
        return todo.title.toLowerCase()===titl.toLowerCase()    })
return index
    }

console.log(method2(newTodos,'Go To Gym'));
