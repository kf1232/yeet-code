const minMoves2 = require('./minMoves2')

test("LeetCode: Test case 1", () => {
    expect(minMoves2([1,2,3])).toStrictEqual(2)
})

test("LeetCode: Test case 2", () => {
    expect(minMoves2([1,10,2,9])).toStrictEqual(16)
})

test("Test Case Failure", () => {
    expect(minMoves2([1,0,0,8,6])).toStrictEqual(16)
})