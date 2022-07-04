/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length == 0) return 0

    let c = {}
    c['I'] = 1
    c['V'] = 5
    c['X'] = 10
    c['L'] = 50
    c['C'] = 100
    c['D'] = 500
    c['M'] = 1000
    
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