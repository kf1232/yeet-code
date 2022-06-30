/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
 var maxBoxesInWarehouse = function(boxes, warehouse) {
    let output = 0
    let index = 0

    for( let i = 1; i < warehouse.length; ++i )
        warehouse[i] = Math.min(warehouse[i-1], warehouse[i])

    boxes.sort( ( a, b ) => a - b )

    while( warehouse.length > 0 ) {
        let x = warehouse.pop()
        if( boxes[index] <= x ) {
            index++
            output++
        }   
    }
    return output
};

module.exports = maxBoxesInWarehouse