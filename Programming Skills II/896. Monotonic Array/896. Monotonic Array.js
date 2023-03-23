/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let dif = 0;
    for(let i=0; i<nums.length-1; ++i){
        if( nums[i] != nums[i+1] && dif == 0 )
            dif = nums[i] - nums[i+1];
        else if( (nums[i] > nums[i+1] && dif < 0 ) || (nums[i] < nums[i+1] && dif > 0 ) )
            return false;
    }
    return true;
};
