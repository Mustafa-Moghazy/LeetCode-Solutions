/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0, n = mat.length;
    for(let i = 0; i<n; ++i){
        sum += mat[i][i] + mat[i][ n - 1 - i ];
    }
    let t = Math.floor(n/2);
    if( n%2 )
        return sum - mat[t][t];
    else
        return sum;
};
