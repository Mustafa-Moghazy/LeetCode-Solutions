/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let n = arr.length;
    let preSum = [];
    for(let i=0; i<n; ++i)
        preSum[i] = (i===0)? arr[0] : preSum[i-1]+arr[i];
    let sum = preSum[n-1];
    for(let i=2; i<n; i+=2){
        for(let j=0; j<n-i; ++j){
            (j===0)? sum+=preSum[j+i] : sum+=preSum[j+i] - preSum[j-1];
        }
    }
    return sum;
};
