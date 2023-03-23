/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let n = mat.length * mat[0].length;
    if( n != r*c )
        return mat;
    let col = mat[0].length;
    let ans = new Array(r).fill(0);
    for (let i = 0; i<ans.length; i++) 
        ans[i] = new Array(c).fill(0);
    for(let i=0; i<n; ++i){
        ans[Math.floor(i/c)][i%c] = (mat[Math.floor(i/col)][i%col]);
    }
    return ans;
};
