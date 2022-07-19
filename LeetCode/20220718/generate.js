/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows < 1 || numRows > 30) return null
    if(numRows == 1) return [[1]]
    if(numRows == 2) return [[1],[1,1]]
    
    let output = [[1],[1,1]]
    for( let i = 2; i < numRows; ++i) {
        let temp = new Array(i+1).fill(1)
        for( let j = 1; j < temp.length-1; ++j)
            temp[j] = output[i-1][j-1] + output[i-1][j]
        output.push(temp)
    }    
    return output
        
}

module.exports = generate