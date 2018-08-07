let Grade= function(cm,tm){
 let per=(cm/tm)*100
 let myGrade
 if(per>=90)
 myGrade='A'
 else if(per>=80)
 myGrade='B'
 else if(per>=70)
 myGrade='C'
 else if(per>=60)
 myGrade='D'
 else
 myGrade='f'
console.log(`Your Grade is ${myGrade} and per is ${per}`)
;
}

Grade(90,110)
