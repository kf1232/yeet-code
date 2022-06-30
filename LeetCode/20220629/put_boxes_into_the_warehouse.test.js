const maxBoxesInWarehouse = require('./put_boxes_into_the_warehouse')

test("LeetCode: Test case 1", () => {
    expect(maxBoxesInWarehouse([4,3,4,1],[5,3,3,4,1])).toStrictEqual(3)
})

test("LeetCode: Test case 2", () => {
    expect(maxBoxesInWarehouse([1,2,2,3,4],[3,4,1,2])).toStrictEqual(3)
})

test("LeetCode: Test case 3", () => {
    expect(maxBoxesInWarehouse([1,2,3],[1,2,3,4])).toStrictEqual(1)
})