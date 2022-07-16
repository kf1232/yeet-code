var isPalindrome = require('./isPalindrome')

test('Leetcode : 1', () => {
    expect(isPalindrome(121)).toStrictEqual(true)
})

test('Leetcode : 2', () => {
    expect(isPalindrome(-121)).toStrictEqual(false)
})

test('Leetcode : 3', () => {
    expect(isPalindrome(10)).toStrictEqual(false)
})