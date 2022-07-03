/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if ( nums.length < 2 ) 
        return nums.length
    
    let down = 1, up = 1
    
    for ( let i = 1; i < nums.length; ++i ) {
        if ( nums[i] > nums[i-1] ) {
            up = down + 1
        }
        else if ( nums[i] < nums[i-1] ) {
            down = up + 1
        }
    }
    
    return Math.max( down, up )
};

module.exports = wiggleMaxLength