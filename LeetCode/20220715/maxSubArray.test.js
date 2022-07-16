var maxSubArray = require('./maxSubArray')

test('Leetcode : 1', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toStrictEqual(6)
})

test('Leetcode : 2', () => {
    expect(maxSubArray([1])).toEqual(1)
})

test('Leetcode : 3', () => {
    expect(maxSubArray([5,4,-1,7,8])).toEqual(23)
})

test('returns correct value for a negative result', () => {
    expect(maxSubArray([Number.MIN_SAFE_INTEGER])).toEqual(Number.MIN_SAFE_INTEGER)
})