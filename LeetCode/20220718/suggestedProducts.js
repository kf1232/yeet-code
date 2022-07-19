/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    products.sort()
    let output = []
    let temp = ""
    
    for(let i in searchWord){  // N     
        let search = []
        temp += searchWord[i]
        for(let j in products){ // 3 -
            if(search.length == 3)
                break
            if(products[j].indexOf(temp) == 0)
                search.push(products[j])
        }
        output.push(search)
    }
    return output  
};

 var suggestedProducts_fail30m = function(products, searchWord) {
    let output = []
    
    products.sort()
    
    let temp = ''
    for(let x in searchWord) {
        temp = temp + searchWord[x]
        console.log({temp})
        products.push(temp)
        products.sort()
        let index = products.indexOf(temp)
        output.push(products.slice(index+1, index+4))
        
        
        
    }
    
    console.log({output})
    return output
};

module.exports = suggestedProducts