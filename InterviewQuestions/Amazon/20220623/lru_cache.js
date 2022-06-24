/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {    
    this.capacity = capacity
    this.hMap = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.hMap.has(key))
        return -1
    
    output = this.hMap.get(key)
        
    this.hMap.delete(key)
    this.hMap.set(key, output)

    return output
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.hMap.delete(key)
    this.hMap.set(key,value)
    
    if(this.hMap.size > this.capacity)
        this.hMap.delete(this.hMap.keys().next().value)   
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache