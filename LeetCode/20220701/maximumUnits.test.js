const maximumUnits = require('./maximumUnits')

test("LeetCode: Test case 1", () => {
    expect(maximumUnits([[1,3],[2,2],[3,1]], 4)).toStrictEqual(8)
})

test("LeetCode: Test case 2", () => {
    expect(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)).toStrictEqual(91)
})

test("Zero Case", () => {
    expect(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 0)).toStrictEqual(0)
})

test("Empty Array, zero case", () => {
    expect(maximumUnits([], 0)).toStrictEqual(0)
})

test("Empty Array, 1 case", () => {
    expect(maximumUnits([], 1)).toStrictEqual(0)
})