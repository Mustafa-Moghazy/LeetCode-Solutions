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
 * @return {number}
 */
 const leftSum = (root, isLeft = 0)=>{
    if( root == null ) return 0;
    left = isLeft && !root.left && !root.right ? root.val : 0;
    left += leftSum(root.left, 1);
    left += leftSum(root.right);
    return left;
 }
var sumOfLeftLeaves = function(root) {
    return leftSum(root);
};
