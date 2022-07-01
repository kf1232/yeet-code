const maximumUnits = require('./maximumUnits')

test("LeetCode: Test case 1", () => {
    expect(reconstructQueue([[1,3],[2,2],[3,1]], 4)).toStrictEqual(8)
})

test("LeetCode: Test case 2", () => {
    expect(reconstructQueue([[5,10],[2,5],[4,7],[3,9]], 10)).toStrictEqual(91)
})