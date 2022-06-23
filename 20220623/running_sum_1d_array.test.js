const runningSum = require("./running_sum_1d_array")

test("Returns an empty array when passed", () => {
    expect(runningSum([])).toStrictEqual([])
})

test("Returns a running array when values are entered", () => {
    expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10])
})

test("Returns a running array when negative values are entered", () => {
    expect(runningSum([1,-1,4])).toStrictEqual([1,0,4])
})

