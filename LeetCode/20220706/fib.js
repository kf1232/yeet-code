/**
 * @param {number} n
 * @return {number}
 */
 var map = new Map()
 map.set(0,0).set(1,1).set(2,1)
 
 var fib = function(n) {
     if(map.has(n))
         return map.get(n)
     
     map.set(n, fib(n-1) + fib(n-2))
     return map.get(n)
 };