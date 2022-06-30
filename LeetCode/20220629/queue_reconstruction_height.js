/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b)=>a[0]-b[0])
    output = new Array(people.length)

    for(let i = 0; i < people.length; ++i) {
        let gt = 0
        let index = 0
        
        while ( gt < people[i][1]) {
            if(!output[index] || output[index][0] >= people[i][0])
                gt++
            index++
        }
        
        while(output[index])
            index++
        
        output[index] = people[i]
    }
        

    return output
};

var reconstructQueueTwo = function(people) {
    people.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    queue = Array()

    for (let i = people.length-1 ; i >= 0 ; i--){
        queue.splice(people[i][1], 0, people[i])
    }
    return queue
}

module.exports = reconstructQueue
/*
Input :    [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
             4     0     5     1     3     2

Sorted:    [[4,4],[5,0],[5,2],[6,1],[7,0],[7,1]]
           [?     ?     ?     ?     [4,4] ?    ]
Solution:  [[5,0] [7,0] [6,1] [5,2] [4,4] [7,1]]




Input:  [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
?         5     4     3     2     1     0
         
          0     1     2     3     4     5
?         ?     ?     ?     ?    [1,4]  ?  
?         ?     ?    [2,2]  ?    [1,4]  ?
?         ?     ?    [2,2] [3,2] [1,4]  ?
?        [4,0]  ?    [2,2] [3,2] [1,4]  ?
?        [4,0] [5,0] [2,2] [3,2] [1,4]  ?
?        [4,0] [5,0] [2,2] [3,2] [1,4] [6,0]

Logic: I want to place users into the list from the shortest person first.
     : The shortest person defines their location in the array by nature of being short.
     : Place the shortest person and define logic to count their spaces as skips going forward



Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
*/