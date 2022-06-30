/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    let output = 0
    
    nums.sort((a,b)=> a-b)

    for( let i in nums ) {
        output += Math.abs(nums[i]-nums[Math.floor(nums.length/2)])
    }
    
    return output
};

module.exports = minMoves2