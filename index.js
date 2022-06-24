const LRUCache = require('./InterviewQuestions/Amazon/lru_cache')

var x = new LRUCache
x.put(5,1)
x.put(10,4)
x.put(99,1)
x.put(10,12)

console.log(x.get(5))

console.log(x)