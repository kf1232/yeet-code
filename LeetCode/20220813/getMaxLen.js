/**
 * @param {number[]} nums
 * @return {number}
 */
 var getMaxLen = function(nums) {
    var helper = function() {
        console.log({output, currentLen, negCount, negInd})
        if(negCount%2 !== 0)
            currentLen = Math.max((currentLen-negInd[0]), (currentLen-(currentLen-negInd[1])))
        
        output = Math.max(output, currentLen)
        currentLen = 0
        negCount = 0
        negInd = [0,0]
        console.log({output, currentLen, negCount, negInd})
        
    }
    
    let output = 0;
    let currentLen = 0;
    let negCount = 0;
    let negInd = [0,0]
    
    for(let x in nums) {
        console.log("x: "+x)
        if(nums[x] === 0) {
            helper()
        }
        else if(nums[x] < 0) {
            if(negCount === 0) {
                negInd = [x,x]
            }
            else {
                negInd[1] = x
            }
            negCount += 1
            currentLen += 1
        }
        else { // nums[x] > 0
            currentLen += 1
        } 
    }
    helper()
    return output
};

module.exports = getMaxLen