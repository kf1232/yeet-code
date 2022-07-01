/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => a[1]-b[1])

    let output = 0
    let count = 0
    while( boxTypes.length > 0 ) {
        count += boxTypes[boxTypes.length-1][0]
        output += boxTypes[boxTypes.length-1][0]*boxTypes[boxTypes.length-1][1]
        
        if(count > truckSize){
            output -= (count-truckSize)*boxTypes[boxTypes.length-1][1]
            break
        }
        boxTypes.pop()
    }
    return output
};

module.exports = maximumUnits