/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a,b) => a-b)
    verticalCuts.sort((a,b) => a-b)
   
    let xVal = horizontalCuts[0]
    let yVal = verticalCuts[0]

    
    for( let i = 1; i < horizontalCuts.length; ++i ) {
        xVal = Math.max(horizontalCuts[i] - horizontalCuts[i-1] , xVal)
    }
    for( let i = 1; i < verticalCuts.length; ++i ) {
        yVal = Math.max(verticalCuts[i] - verticalCuts[i-1] , yVal)
    }

    
    xVal = Math.max(h - horizontalCuts[horizontalCuts.length-1], xVal)
    yVal = Math.max(w - verticalCuts[verticalCuts.length-1], yVal)

    return Number(BigInt(xVal) * BigInt(yVal) %1000000007n)
};

module.exports = maxArea