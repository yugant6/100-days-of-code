let object={
    day:'Monday',
    meetingDone:0,
    meetingLeft:0,
//this keyword is used to accesing the elements inside object of the object
    addMeeting:function(num){
        this.meetingLeft=this.meetingLeft+num

    },

    deleteMeeting:function(num){
        this.meetingDone=this.meetingDone+num
    },

    resetDay:function(){
      this.meetingDone=0
      this.meetingLeft=0
    },
    summary:function(){
        this.meetingLeft=this.meetingLeft-this.meetingDone
        return `You have ${this.meetingLeft} meetings left`
    },
}

object.addMeeting(4)
object.deleteMeeting(1)
console.log(object.summary());
