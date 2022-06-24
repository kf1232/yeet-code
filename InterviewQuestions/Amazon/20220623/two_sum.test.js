const twoSum = require('./two_sum')

test("Two member array, matching values", () => {
    expect(twoSum([3,3], 6)).toStrictEqual([0, 1])
})

test("n member array of values with single solution", () => {
    expect(twoSum([10,15,39,100,1,2,5,6], 101)).toStrictEqual([3, 4])
})

test("first value twice is the solution, but correct solution exists", () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})