/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    output = []
    for(let i=0; i< matrix.length; i++)
        for(let j =0; j<matrix[0].length; j++){
            if(!output[j])
                output[j] = []
            output[j][i] = matrix[i][j]
        }
    return output    
}

module.exports = transpose