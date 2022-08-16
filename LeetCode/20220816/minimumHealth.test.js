var minimumHealth = require('./minimumHealth')

test('Simple damage, no armor', () => {
    expect(minimumHealth([1], 0)).toStrictEqual(2)
})

test('Armor greater than highest damage', () => {
    expect(minimumHealth([1,2,3], 99)).toStrictEqual(4)
})

test('Armor less than highest damage', () => {
    expect(minimumHealth([2,3,4], 3)).toStrictEqual(7)
})