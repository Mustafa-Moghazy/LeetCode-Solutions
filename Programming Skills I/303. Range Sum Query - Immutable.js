/**
 * @param {number[]} nums
 */
let preSum = []
var NumArray = function(nums) {
    for(let i=0; i<nums.length; ++i){
        preSum[i] = (i==0)? nums[i] : nums[i]+preSum[i-1]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(l, r) {
    return (l==0)? preSum[r] : preSum[r] - preSum[l-1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
