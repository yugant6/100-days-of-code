
document.querySelector('button').addEventListener('click',()=>{
 console.log("I am clicked");   
})
document.querySelector('button').addEventListener('click',(event)=>{
   console.log(event);   
 })
document.querySelector('button').addEventListener('click',(event)=>{
  event.target.textContent = 'I was pressed'   
   })

// tracking input form

  document.querySelector('#myform').addEventListener('change',(event)=>{
console.log(event.target.value);
 })

document.querySelector('#myform').addEventListener('input',(event)=>{
  console.log(event.target.value);
  })
  
document.querySelector('.form').addEventListener('submit',(event)=>{
  event.preventDefault()
  console.log(event.target.username.value);
console.log(event.target.realname.value);
event.target.realname.value=''
})

   
