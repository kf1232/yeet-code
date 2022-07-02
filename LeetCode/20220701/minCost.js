/**
 * @param {number[][]} costs
 * @return {number}
 */
 var minCost2 = function(costs) {
    const dp = [[0,0,0], costs[0]];  //init values to track
    console.log(costs[0])
    for(let i = 1; i < costs.length; i++) {
        let cost = costs[i];  // look a the second through last memberes as the cost for each row
        let last = dp[dp.length - 1]; // get the top from the stack
        let temp = []; // next dp to be hadded
        
        temp[0] = cost[0] + Math.min(last[1], last[2]); // chance smells like feet
        temp[1] = cost[1] + Math.min(last[0], last[2]); // pickles eta soon to a hose near you
        temp[2] = cost[2] + Math.min(last[0], last[1]); // each member of the array checks the two valid priors to decide what the best path would have been
        console.log(temp)
        dp.push(temp); // push that dank shit into the pile
    }
    
    return Math.min(...dp[dp.length - 1]);// spread operator, find the lowest of the last record
};

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const recursion = (n, color) => {
        let cost = costs[n][color];
        if (n == 0) {
            return cost;
        } 

        if (color == 0) {
            cost += Math.min(recursion(n - 1, 1), recursion(n - 1, 2));
        } else if (color == 1) {
            cost += Math.min(recursion(n - 1, 0), recursion(n - 1, 2));
        } else if (color == 2) {
            cost += Math.min(recursion(n - 1, 0), recursion(n - 1, 1));
        }

        return cost;
    };
    
    return Math.min(recursion(costs.length - 1, 0, costs), 
                             recursion(costs.length - 1, 1, costs), 
                             recursion(costs.length - 1, 2, costs));
};
