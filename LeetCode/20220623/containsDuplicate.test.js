const containsDuplicate = require('./containsDuplicate')

test("An empty array returns false", () => {
    expect(containsDuplicate([])).toBe(false)
})

test("An array with no matching members returns false", () => {
    expect(containsDuplicate([1,2,3])).toBe(false)
})

test("An array with a matching members returns true", () => {
    expect(containsDuplicate([2,2])).toBe(true)
})

test("An array with multiple matching members returns true", () => {
    expect(containsDuplicate([2, 3, 2, 3])).toBe(true)
})