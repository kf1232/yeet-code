const candy = require('./candy')

test('test input 1', () => {
    expect(candy([1,0,2])).toStrictEqual(5)
})

test('test input 2', () => {
    expect(candy([1,2,2])).toStrictEqual(4)
})

test('test input 3', () => {
    expect(candy([1,2,87,87,87,2,1])).toStrictEqual(13)
})

test('test input 4', () => {
    expect(candy([29,51,87,87,72,12])).toStrictEqual(12)
})
