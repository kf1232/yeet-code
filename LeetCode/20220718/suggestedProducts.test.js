var suggestedProducts = require('./suggestedProducts')

test('LeetCode : 1', () => {
    expect(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"))
          .toStrictEqual([["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]])
})

test('LeetCode : 2', () => {
    expect(suggestedProducts(["bags","baggage","banner","box","cloths"],"bags"))
          .toStrictEqual([["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]])
})