const minCost = require('./minCost')

test("LeetCode: Test case 1", () => {
    expect(minCost([[17,2,17],[16,16,5],[14,3,19]])).toStrictEqual(10)
})

test("LeetCode: Test case 2", () => {
    expect(minCost([[7,6,2]])).toStrictEqual(2)
})

