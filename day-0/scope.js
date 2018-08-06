let iamglobal='yugant' //here let is access in whole code because it does not contain in any block
if(true){
    var iamlocal='ajay'  // use var to access globally and let for particular block
    iamglobal='tayal' //access globally 
    console.log(iamlocal)
    console.log(iamglobal)
    
}
iamlocal='ghochu'
console.log(iamlocal)
console.log(iamglobal);

let king= 'john'
if(true)
{
     let king ='sam'
     if(true)
     {
         king='ram'
         console.log(king);
         
     }
}
if(true){
console.log("I am second part"+king);}