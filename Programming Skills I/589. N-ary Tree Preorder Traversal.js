/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const dfs = ( root, ans=[])=>{
    if(!root) return ans;

    ans.push(root.val);
    for(let child of root.children)
        dfs(child, ans);
    
    return ans;
}
var preorder = function(root) {
    let ans = [];
    return dfs(root, ans);
};
