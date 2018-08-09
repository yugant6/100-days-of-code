let myTodos ={
    day:'Monday',
    meetingLeft:0,
    meetingDone:0
}

let addMeeting = function(obj,meet){
    obj.meetingLeft=obj.meetingLeft+meet 
}

let deleteMeeting=function(obj,meet){
    obj.meetingDone=obj.meetingDone+meet //Here noticed that if we do 0-meet , we get negative value so to avoid such logical error we change sign into poositive
}

let resetDay= function(obj){
 obj.meetingLeft=0
 obj.meetingDone=0
}

let getSumOfDay=function(obj){
 obj.meetingLeft= obj.meetingLeft-obj.meetingDone
 return `You have ${obj.meetingLeft} meetings left`
}

addMeeting(myTodos,3)
deleteMeeting(myTodos,1)

console.log(getSumOfDay(myTodos))
    
