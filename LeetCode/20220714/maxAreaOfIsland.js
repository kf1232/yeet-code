/**
 * @param {number[][]} grid
 * @return {number}
 
 You are given an m x n binary matrix grid. An island is a group of 1's 
   (representing land) connected 4-directionally (horizontal or vertical.) 
   You may assume all four edges of the grid are surrounded by water.

 The area of an island is the number of cells with a value 1 in the island.

 Return the maximum area of an island in grid. If there is no island, return 0.
 
 */
 var maxAreaOfIsland = function(grid) {
    // the problem defines our edge distances, M and N.
    // I set M and N to edges, and use iterables m and n to keep track of where I'm going
    const M = grid.length
    const N = grid[0].length

    // Directions can only check Left, Right, Up, Down, and we create a quick intent variable
    //   to mutate the grid position as we go
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    // We need to return something, create variable
    let output = 0;
    
    
    // for all values in the grid, going from left to right top to bottom, we search for valid
    //  islands (value == 1).  If we find a 1, we find the area of the island and update output
    //  based on the maximum of the island found and the current max island size found.
    for(let m = 0; m < M; m++) {
        for(let n = 0; n < N; n++) {
            let area = searchIsland(m,n)
            output = Math.max(area,output)
        }
    }
    // All locations in the grid have been searched, return the output
    return output
    
    
    // define the function within the function to scope variables to the helper action.
    function searchIsland(m,n) {
        // If we are out of bounds, or find a zero value we don't add something new.
        if( m < 0 || n < 0 || m >= M || n >= N || !grid[m][n]) 
            return 0
        
        // if we are here, we have found an island, and want to start a count to search deeper.
        let output = 1        
        // We update the location to zero, since we have visited the location and do not want to
        //  loop back onto ourselves.
        // To keep the state of the islands existing, we could set this to a non 1 value to reflect
        //  their existance, but it is not required for the prompt presented.
        grid[m][n] = 0
        // For each direction in the set of directions, we search the surrounding squares.
        //  We search Left, Up, Right, Down as valid growths of the island.  To add diag movement,
        //  we create four new values in the direction array list.
        for(let [dm, dn] of directions) {
            // Cumulate the found values into output to return to the main function.
            output += searchIsland(m+dm, n+dn)
        }
        return output
    }
};

module.exports = maxAreaOfIsland