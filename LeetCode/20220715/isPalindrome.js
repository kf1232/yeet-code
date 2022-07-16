/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0  || x % 0 == 0)
        return false
    
    let xString = x.toString();
    let start = 0, end = xString.length-1
    while ( start < end ) {
        if(xString[start] != xString[end])
            return false
        
        ++start
        --end
    }

    return true
};

module.exports = isPalindrome