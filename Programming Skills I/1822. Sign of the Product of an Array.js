/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let neg = 0, f = false;
    let n = nums.length;
    for(let i=0; i<n; i++){
        if(nums[i] < 0) neg++;
        if(nums[i] == 0) f = true;
    }
    if(f)
        return 0;
    else
        return (neg%2)? -1 : 1;
    
};
