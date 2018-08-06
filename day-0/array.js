const marvel=['superman','batman','ironman']
console.log(marvel);
console.log(marvel[0])
console.log(marvel.length);
console.log(marvel[marvel.length-1]);
// if we have add other elements in array, our size is increased so to avoid this problem we print accordingly
console.log(`We have ${marvel.length} superheroes`);// note- ``

const numbers=['one','two','three','four','five','six']
numbers[1]='something' // in array we can change values still declare in const
numbers[1]='two'

console.log(numbers.shift()); //delete first element
console.log(numbers);

numbers.unshift('Something') // insert first element
console.log(numbers);

console.log(numbers.pop()); // delete last element
console.log(numbers);

numbers.push('Something'); // insert last element
console.log(numbers);

numbers.splice(2,1,'ghochu') //delete one element after two element and replace it with ghochu
console.log(numbers);




