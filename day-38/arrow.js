function modifyArray(nums) {
    var something = function(n){
        var a = (n%2==0) ? n*2: n*3;
        return a;
    }
    var newArray = nums.map(something);
    return newArray;
    
}
