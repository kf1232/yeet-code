const subArrayRanges = require('./subArrayRanges')

test('leetcode test input 1', () => {
    expect(subArrayRanges([1,2,3])).toStrictEqual(4)
})
test('Input with negative values', () => {
    expect(subArrayRanges([4,-2,-3,4,1])).toStrictEqual(59)
})