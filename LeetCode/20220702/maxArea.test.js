const maxArea = require('./maxArea')

test('LeetCode TC: 1', () => {
    expect(maxArea(5, 4, [3,1], [1])).toStrictEqual(6)
})

test('Overflow check', () => {
    expect(maxArea(1000000000, 1000000000, [2], [2])).toStrictEqual(81)
})

