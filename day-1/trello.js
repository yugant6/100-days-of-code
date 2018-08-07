const myTodos= []

myTodos.push('go for workout at 5am')
myTodos.push('Eat Soyabeans')
myTodos.push('Eat Almonds at afternoon')
myTodos.push('Drink fruit juice or protien rich food')
myTodos.push('Drink Milk at night')
console.log('YOur Timetable is');
myTodos.forEach(function(todo,index){
    console.log(`yOUR tASK NO ${index+1} is ${todo}`);
})      //Generally prefer foreach in array.
for(let i=0;i<myTodos.length;i++)
{ 
    console.log(`Task no ${i+1} - ${myTodos[i]}`);   
}