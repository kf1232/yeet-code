/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let count = 0, sum = 0;
    
    const subArrayList = new Map();
    subArrayList.set(0,1)
    
    for(let i = 0; i < nums.length; ++i) {
        sum += nums[i]
        if(subArrayList.has(sum-k)) {
            count += subArrayList.get(sum-k)
        }
        let temp = subArrayList.get(sum) ? subArrayList.get(sum) : 0
        subArrayList.set(sum, temp+1)
    }
    
    return count
};

var subarraySumN2 = function(nums, k) {
    let output = 0
    for(let i = 0; i < nums.length; ++i) {
        for(let j = nums.length-1; j>= i; --j) {
            let temp = nums.slice(i,j+1).reduce((a,b) => a + b, 0)
            if(temp == k)
                ++output
        }
    }
    return output
};

module.exports = subarraySum