const minDeletions = require('./minDeletions')


test("Passing an empty string should return zero changes", () => {
    expect(minDeletions('')).toStrictEqual(0)
})

test("Passing a string with one character type should return zero changes", () => {
    expect(minDeletions('aaaa')).toStrictEqual(0)
})

test("Passing a string with two character types of different occurances should return zero changes", () => {
    expect(minDeletions('aab')).toStrictEqual(0)
})

test("Passing a string with two character types of the same occurance rate should return 1 change", () => {
    expect(minDeletions('aabb')).toStrictEqual(1)
})

test("Passing a string with three character types of the same occurance rate should return three changes", () => {
    expect(minDeletions('aabbcc')).toStrictEqual(3)
})

/*
  Edge Cases
  Valid input for the function

  ? Things that 100% cause errors, invalid input, wrong function calls or something?
  When invalid data is possible, validate data


*/