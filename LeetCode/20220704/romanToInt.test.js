const romanToInt = require('./romanToInt')

test("empty string", () => {
    expect(romanToInt("")).toStrictEqual(0)
})

test("IV test", () => {
    expect(romanToInt("IV")).toStrictEqual(4)
})

test("IX test", () => {
    expect(romanToInt("IX")).toStrictEqual(9)
})

test("XL test", () => {
    expect(romanToInt("XL")).toStrictEqual(40)
})

test("XC test", () => {
    expect(romanToInt("XC")).toStrictEqual(90)
})

test("CD test", () => {
    expect(romanToInt("CD")).toStrictEqual(400)
})

test("CM test", () => {
    expect(romanToInt("CM")).toStrictEqual(900)
})

test("test 1", () => {
    expect(romanToInt("III")).toStrictEqual(3)
})

test("test 2", () => {
    expect(romanToInt("LVIII")).toStrictEqual(58)
})

test("test 3", () => {
    expect(romanToInt("MCMXCIV")).toStrictEqual(1994)
})