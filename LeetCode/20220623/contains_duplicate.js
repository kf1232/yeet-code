/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
    
    /*
    for ( x in nums ) {
        if( nums.lastIndexOf(nums[x]) != x) {
            return true
        }      
    }
    return false
    */
}

module.exports = containsDuplicate