var minimumHealth = require('./minimumHealth')
/*
    You are playing a game that has n levels numbered from 0 to n - 1. You are given a 
      0-indexed integer array damage where damage[i] is the amount of health you will 
      lose to complete the ith level.

    You are also given an integer armor. You may use your armor ability at most once 
      during the game on any level which will protect you from at most armor damage.

    You must complete the levels in order and your health must be greater than 0 at all 
      times to beat the game.
      
    Return the minimum health you need to start with to beat the game.

    n == damage.length
    1 <= n <= 105
    0 <= damage[i] <= 105
    0 <= armor <= 105
*/

test('Simple damage, no armor', () => {
    expect(minimumHealth([1], 0)).toStrictEqual(2)
})

test('Armor greater than highest damage', () => {
    expect(minimumHealth([1,2,3], 99)).toStrictEqual(4)
})

test('Armor less than highest damage', () => {
    expect(minimumHealth([2,3,4], 3)).toStrictEqual(7)
})