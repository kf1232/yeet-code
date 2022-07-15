let maxAreaOfIsland = require('./maxAreaOfIsland')

/* Constraints
    m == grid.length
    n == grid[0].length
    1 <= m
    n <= 50
    grid[x][y] == 1 | 0
*/


test('leetcode 1', () => {
    expect(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])).toStrictEqual(6)
})

test('leetcode 2', () => {
    expect(maxAreaOfIsland([[0,0,0,0,0,0,0,0]])).toStrictEqual(0)
})