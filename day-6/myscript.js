console.log(document);
console.log(document.body);
console.log(document.URL);
console.log(document.title);
//this changed the title name
document.title='I changed'
//getElementById is method so print tag also and title is property so print only title
//console.log(document.getElementById('one'));
//console.log(document.getElementsByClassName('cone'));
// we can not do like this document.getElementsByClassName('cone')='something'
//one document.title can changed
//better way to selecting the things

//const myElement = document.querySelector('p')
//console.log(myElement);
//const element = document.querySelector('#one')
//console.log(element);
// when we provide script tag in body only then we can access body tags
// but if you want to load your script first then it must be provide in head tag

//const myPElements =document.querySelector('p')

//myPElements.textContent = 'I am changed baby'

// if i want to change all the p tags we just use p tag
//const myPPElements = document.querySelectorAll('p')
//myPPElements.forEach(function(prog){
 //   prog.textContent = 'I am changed'})

 const myElement = document.createElement('p')
//this will add p element bottom to the body tag
 document.querySelector('body').appendChild(myElement)

 myElement.textContent = 'I am added via JS'