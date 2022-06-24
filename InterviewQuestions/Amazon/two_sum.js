/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// view changes

 var twoSum = function(nums, target) {
    dict = {}
    for(x = 0; x < nums.length; ++x) {
        if( target-nums[x] in dict)
            return [dict[target-nums[x]], x]
        dict[nums[x]] = x
    }
    /*
    for ( x in nums )
        if(nums.lastIndexOf(target-nums[x]) != -1 && nums.lastIndexOf(target-nums[x]) != x)
            return [x, nums.lastIndexOf(target-nums[x])]  
    */
}

module.exports = twoSum