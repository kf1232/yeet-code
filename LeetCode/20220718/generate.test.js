var generate = require('./generate')

// 1 <= numRows <= 30

test('1', () => {
    expect(generate(1)).toStrictEqual([[1]])
})

test('2', () => {
    expect(generate(2)).toStrictEqual([[1],[1,1]])
})

test('-1', () => {
    expect(generate(-1)).toStrictEqual(null)
})

test('31', () => {
    expect(generate(31)).toStrictEqual(null)
})