const merge = require('./merge_intervals')

test("An array with overlapping members", () => {
    expect(merge([[1,3],[2,6],[8,10],[15,18]]).toStrictEqual([[1,6],[8,10],[15,18]]))
})