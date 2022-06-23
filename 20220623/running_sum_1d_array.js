/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var runningSum = function(nums) {
    output = Array(nums.length)
    rSum = 0
    index = 0
    nums.forEach(x => {
        rSum += x
        output[index] = rSum
        index += 1
    })
    
    return output
};

module.exports = runningSum