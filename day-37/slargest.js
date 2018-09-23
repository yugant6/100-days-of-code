function getSecondLargest(nums) {
    // Complete the function
 let largest= nums[0];
 let slargest = nums[0]
    
    for(let i=1;i<nums.length;i++)
    {
        if(largest<nums[i])
        {
            slargest=largest;
            largest=nums[i];
        }
        else if(slargest<nums[i] && nums[i]!=largest)
        {
            slargest=nums[i];
        }
    }
    return slargest
}
