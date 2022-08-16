var getMaxLen = require('./getMaxLen')

/*

1 <= nums.length <= 105
-109 <= nums[i] <= 109


[0,1,-2,-3,-4]
[1,-2,-3,4]
[1,2,3,5,-6,4,0,10]
[0,1,-2,-3,-4]

*/


test('No negative values', () => {
    expect(getMaxLen([1,2,3,4,5,6,7,8,9,10])).toStrictEqual(10)
})
test('One negative values', () => {
    expect(getMaxLen([1,2,3,4,5,6,-7,8,9,10])).toStrictEqual(6)
})
test('Two negative values', () => {
    expect(getMaxLen([1,2,3,4,5,6,-7,-8,9,10])).toStrictEqual(10)
})
test('Three negative values', () => { // [-1,-2,-3,0,1]
    expect(getMaxLen([1,2,3,4,5,-6,-7,8,9,-10])).toStrictEqual(9)
})
test('Zero, no negative values', () => {
    expect(getMaxLen([1,2,3,4,5,0,7,8,9,10])).toStrictEqual(5)
})
test('Zero, One negative values', () => {
    expect(getMaxLen([1,2,3,4,5,-6,0,8,9,10])).toStrictEqual(5)
})
test('Zero, Two negative values', () => {
    expect(getMaxLen([1,2,-3,4,-5,6,0,8,9,10])).toStrictEqual(6)
})
test('Zero, Three negative values', () => {
    expect(getMaxLen([1,-2,-3,4,-5,6,0,8,9,10])).toStrictEqual(4)
})