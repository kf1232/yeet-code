/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
	const N = nums.map(n => -n)
	return getMaxRange(nums) + getMaxRange(N)

	function getMaxRange(nums) {
		const S = [-1]
		nums.push(Infinity)
		let res = 0
		for (let i = 0; i < nums.length; i++) {
			while (nums[S[S.length - 1]] < nums[i]) {
				const MOST_MAX = S.pop(),
					LEFT_BOUNDARY = S[S.length - 1]
				const LEFT_RANGE = MOST_MAX - LEFT_BOUNDARY,
					RIGHT_RANGE = i - MOST_MAX
				res += nums[MOST_MAX] * LEFT_RANGE * RIGHT_RANGE
			}
			S.push(i)
		}
		return res
	}
};


var subArrayRangesON2 = function(nums) {
    let output = 0
    for ( let i = 0; i < nums.length; ++i ) {
        for ( let j = i; j < nums.length; ++j ) {
            output += Math.abs(nums[i]-nums[j])
        }
    }
    return output
};

module.exports = subArrayRanges