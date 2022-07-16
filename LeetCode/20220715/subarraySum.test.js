var subarraySum = require('./subarraySum')

/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

    1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
 -107 <= k <= 107

*/

test('Leetcode : 1', () => {
    expect(subarraySum([1,1,1], 2)).toStrictEqual(2)
})

test('Leetcode : 2', () => {
    expect(subarraySum([1,2,3], 3)).toStrictEqual(2)
})