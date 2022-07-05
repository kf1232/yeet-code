const longestConsecutive = require(`./longestConsecutive`)

test('test case 1', () => {
    expect(longestConsecutive([100,4,200,1,3,2])).toStrictEqual(4)
})

test('test case 2', () => {
    expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toStrictEqual(9)
})

test('test case 3', () => {
    expect(longestConsecutive([0])).toStrictEqual(1)
})

test('test case 4', () => {
    expect(longestConsecutive([0,0])).toStrictEqual(1)
})

test('test case 5', () => {
    expect(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])).toStrictEqual(7)
})

test('test case 6', () => {
    expect(longestConsecutive([])).toStrictEqual(0)
})