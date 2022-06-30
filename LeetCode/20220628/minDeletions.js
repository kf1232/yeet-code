/**
 * @param {string} s
 * @return {number}
 */
 var minDeletionsFirst = function(s) {
    let m = new Map()
    
    for( let x of s )
        m.set(x, m.has(x) ? m.get(x)+1 : 1)

    counts = Array.from(m.values()).sort((a,b) => a-b)

    output = 0   
    complete = false
    
    while (!complete) {
        complete = true
        for(i=0; i<counts.length-1; ++i) {
            if(counts[i] !== 0 && counts[i] === counts[i+1]) {
                ++output
                --counts[i]
                complete = false
            }
        }
    } 
    
    return output
};

/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
    let m = new Map()
    for( let x of s )
        m.set(x, m.has(x) ? m.get(x)+1 : 1)

    counts = Array.from(m.values()).sort((a,b)=> b-a)

    mF = s.length
    output = 0

    for(i=0; i<counts.length; ++i) {
        if (counts[i] > mF) {
            output += counts[i] - mF;
            counts[i] = mF;
        }
        mF = Math.max(0, counts[i] - 1);
    }
     
    return output
};
module.exports = minDeletions