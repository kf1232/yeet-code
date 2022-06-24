/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for(i=0; i<intervals.length-1; ++i) {
        if(intervals[i][1]>=intervals[i+1][0]) {
            intervals[i][1] = Math.max(intervals[i+1][1], intervals[i][1])
            intervals.splice(i+1,1)
            --i
        }
    }
    return intervals
};

module.exports = merge

// Problem 1: [[1,4],[0,4]]
//  first solution failure did not account for the first value of the second compare
//  to be a lesser value than the first array.  Solved with a sort function.
// Problem 2: [[1,4],[2,3]]
//  second solution failure did not account for the second array to be contained fully
//  in the first array.
// Problem 3: [[1,4],[0,2],[3,5]]
//  the program did not account for stepping back to check the new array inserted against
//  the next value.  Added a step back action to make sure the function checked.