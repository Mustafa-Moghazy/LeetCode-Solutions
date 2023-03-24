/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const height = (node)=>{
    if(!node) return 0;
    return 1 + Math.max( height(node.left), height(node.right) );
}
var isBalanced = function(root) {
    if(!root) return true;
    let lh = height(root.left);
    let rh = height(root.right);
    if( Math.abs(lh-rh) <= 1 && isBalanced(root.left) && isBalanced(root.right) )
        return true;

    return false;
    
};
