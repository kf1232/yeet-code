const LRUCache = require('./LRUCache')

test("We create a cache, with capacity 1", () => {
    let x = new LRUCache
    x.capacity = 1
    expect(x.capacity).toStrictEqual(1)
})

test("We create a cache, with capacity 1.  We insert one record and it exists", () => {
    let x = new LRUCache
    x.capacity = 1
    x.put(5,1)
    expect(x.capacity).toStrictEqual(1)
    expect(x.hMap.size).toStrictEqual(1)
    expect(x.get(5)).toStrictEqual(1)
})

test("We create a cache with capacity 1, we then insert two records there will only be one record kept", () => {
    let x = new LRUCache
    x.capacity = 1
    x.put(5,1)
    x.put(10,1)
    expect(x.capacity).toStrictEqual(1)
    expect(x.hMap.size).toStrictEqual(1)
    expect(x.get(5)).toStrictEqual(-1)
    expect(x.get(10)).toStrictEqual(1)
})

test("We create a cache with capacity 0, we expect to always get -1 in get requests", () => {
    let x = new LRUCache
    x.capacity = 0
    x.put(5,1)
    expect(x.get(5)).toBe(-1)
})

