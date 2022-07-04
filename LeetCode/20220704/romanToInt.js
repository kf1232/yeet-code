/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length == 0) return 0

    const c = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    
    let output = c[s[s.length-1]]
    for( let i = s.length-2; i >= 0; --i) {
        if(c[s[i]] < c[s[i+1]])
            output -= c[s[i]]
        else
            output += c[s[i]]
    }
    
    return output
};

module.exports = romanToInt