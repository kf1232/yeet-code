/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const uniqueNums = [...new Set(nums)]
    if(uniqueNums.length == 1) 
        return 1
    
    uniqueNums.sort((a,b) => a-b)
    
    let output = 0;
    let temp = 1;
    
    for ( let i = 1; i < uniqueNums.length; ++i) {
        if ( uniqueNums[i] - uniqueNums[i-1] == 1)
            temp += 1           
        else {
            temp = 1
        }
        output = Math.max(output, temp)
    }
    
    return output
};

module.exports = longestConsecutive