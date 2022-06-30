const merge = require('./merge')


// Problem 1: [[1,4],[0,4]]
//  first solution failure did not account for the first value of the second compare
//  to be a lesser value than the first array.  Solved with a sort function.
// Problem 2: [[1,4],[2,3]]
//  second solution failure did not account for the second array to be contained fully
//  in the first array.
// Problem 3: [[1,4],[0,2],[3,5]]
//  the program did not account for stepping back to check the new array inserted against
//  the next value.  Added a step back action to make sure the function checked.

test("An array with overlapping members", () => {
    expect(merge([[1,3],[2,6],[8,10],[15,18]])).toStrictEqual([[1,6],[8,10],[15,18]])
})

test("An array with no overlapping members", () => {
    expect(merge([[0,1],[2,3]])).toStrictEqual([[0,1],[2,3]])
})

test("An array where the second entry contains the first", () => {
    expect(merge([[1,4],[0,4]])).toStrictEqual([[0,4]])
})

test("An array where the second entry is fully contained in the first", () => {
    expect(merge([[1,4],[2,3]])).toStrictEqual([[1,4]])
})