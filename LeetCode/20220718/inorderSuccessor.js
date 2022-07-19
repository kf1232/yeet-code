/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var descend = function(node) {
    if(!node || !node.left)
        return node
    return descend(node.left)
}
var ascend = function(node, val) {
    if(!node)
        return node
    if(node.val > val)
        return node
    return ascend(node.parent,val)
}
var inorderSuccessor = function(node) {
    if(node.right)
        return descend(node.right)
    return ascend(node.parent, node.val)
};

/*
var dive = function(node) {
    if(node.left)
        return dive(node.left)
    else
        return node.val
}

     if(node.parent)
         if(node.val < node.parent.val) {
             return node.parent
         }
         else if ( node.val > node.parent.val) {
             return node.right
         }
    else {
        if(node.right)
            if(node.left)
                return dive(node.left)
        else
            return node.val

var dive = function(node) {
    // if we are in node.right, we need to check left and right values.
    if(node.left)
        return node.left
    
    return node.val
}
var inorderSuccessor = function(node) {
    console.log({node})
    // if node parent > node.val return node parent
    if(node.val < node.parent)
        return node.parent.val
    // if node parent < node.val return node right
    return dive(node.right)        
};

*/