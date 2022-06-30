const transpose = require("./transpose")

test("Returns an empty array when passed", () => {
    expect(transpose([])).toStrictEqual([])
})

test("Returns a running array when values are entered", () => {
    expect(transpose([[1,2,3],[4,5,6],[7,8,9]])).toStrictEqual([[1,4,7],[2,5,8],[3,6,9]])
})
