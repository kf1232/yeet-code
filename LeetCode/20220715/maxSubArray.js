/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let current = nums[0]
    let max = nums[0]
    
    for(let i = 1; i < nums.length; ++i) {
        current = Math.max(nums[i], current+nums[i])
        max = Math.max(current,max)
    }
    
    return max
};



var maxSubArrayN2 = function(nums) {
    if(nums.length == 1)
        return nums[0]
    
    let max = nums[0]
    
    for(let i = 1; i < nums.length; ++i) {
        for(let j = nums.length-1; j>= i; --j) {
            let temp = nums.slice(i,j+1).reduce((a,b) => a + b, 0)
            max = Math.max(max, temp)
        }
    }
    
    return max
};

module.exports = maxSubArray