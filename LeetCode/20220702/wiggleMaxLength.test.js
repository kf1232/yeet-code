const wiggleMaxLength = require('./wiggleMaxlength')

test('Leetcode Test Case 1', () => {
    expect(wiggleMaxLength([1,7,4,9,2,5])).toStrictEqual(6)
})

test('Leetcode Test Case 1', () => {
    expect(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])).toStrictEqual(7)
})

test('Smaller than base case', () => {
    expect(wiggleMaxLength([1])).toStrictEqual(1)
})