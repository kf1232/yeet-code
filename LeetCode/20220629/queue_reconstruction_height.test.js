const reconstructQueue = require('./queue_reconstruction_height')

test("LeetCode: Test case 1", () => {
    expect(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])).toStrictEqual([[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]])
})

test("LeetCode: Test case 2", () => {
    expect(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]])).toStrictEqual([[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]])
})