/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let sum = 0
    let cL = new Array(ratings.length).fill(1)
    let cR = new Array(ratings.length).fill(1)

    for ( let i = ratings.length - 2; i >= 0; --i)
        if (ratings[i] > ratings[i + 1])
            cR[i] = cR[i + 1] + 1;
            
    for ( let i = 1; i < ratings.length; ++i) {
        if (ratings[i] > ratings[i - 1])
            cL[i] = cL[i - 1] + 1;

        sum += Math.max(cL[i-1], cR[i-1]);
    }

    return sum + Math.max(cL.pop(), cR.pop());
}


var candy_l2r = function(ratings) {
    let sum = 0
    let cL = new Array(ratings.length).fill(1)
    let cR = new Array(ratings.length).fill(1)

    for ( let i = 1; i < ratings.length; ++i) {
        if (ratings[i] > ratings[i - 1]) {
            cL[i] = cL[i - 1] + 1;
        }
    }

    for ( let i = ratings.length - 2; i >= 0; --i) {
        if (ratings[i] > ratings[i + 1]) {
            cR[i] = cR[i + 1] + 1;
        }
    }

    for ( let i = 0; i < ratings.length; ++i) {
        sum += Math.max(cL[i], cR[i]);
    }

    return sum;
}


var candy_thirdpass = function(ratings) {
    let dLeft = new Array(ratings.length).fill(1)
    let dRight = new Array(ratings.length).fill(1)

    for( let i = 1; i < ratings.length; ++i ) {
        if(ratings[i-1] > ratings[i]) {
            dLeft[i-1] += 1
        }
    }

    for( let i = ratings.length-1; i > 0; --i ) {
        if(ratings[i] > ratings[i-1]) {
            dRight[i] += 1
        }
    }
    let output = 0
    for( let i = 0; i < ratings.length; ++i) {
        output += Math.max(dLeft[i], dRight[i])
    }

    return output
}

var candy_bf = function(ratings) {
    let distribution = new Array(ratings.length).fill(1)
    let incomplete = true
    
    while(incomplete) {
        incomplete = false
        for( let i = 0; i < ratings.length; ++i ) {
            if( ratings[i] > ratings[i+1] && distribution[i] <= distribution[i+1]) {
                distribution[i] = distribution[i+1] + 1
                incomplete = true
            }
            else if ( ratings[i+1] > ratings[i] && distribution[i+1] <= distribution[i]) {
                distribution[i+1] = distribution[i] + 1
                incomplete = true
            }
        }
    }
    return distribution.reduce((a,b) => a + b)
};

 var candy_secondPass = function(ratings) {
    let distribution = new Array(ratings.length).fill(0)
    
    for( let i = 0; i < ratings.length; ++i ) {
        if( ratings[i] > ratings[i+1] && distribution[i] <= distribution[i+1]) {
            distribution[i] = distribution[i+1] + 1
        }
        if ( ratings[i] == ratings[i+1] ) {
            distribution[i+1] = distribution[i] - 1
        }
        if ( ratings[i+1] > ratings[i] && distribution[i+1] <= distribution[i]) {
            distribution[i+1] = distribution[i] + 1
        }
    } 
    return distribution.reduce((a,b) => a + b) + ratings.length
};

var candy_firstPass = function(ratings) {
    let distribution = new Array(ratings.length).fill(0)
    
    for( let i = 0; i < ratings.length; ++i ) {
        if( ratings[i] > ratings[i+1] ) {
            distribution[i] = distribution[i+1] + 1
        }
        if ( ratings[i+1] > ratings[i] ) {
            distribution[i+1] = distribution[i] + 1
        }
    }
    return distribution.reduce((a,b) => a + b) + ratings.length
};

module.exports = candy