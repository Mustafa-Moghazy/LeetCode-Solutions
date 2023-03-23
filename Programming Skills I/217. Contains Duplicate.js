/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}
    for(let i=0; i<nums.length; ++i){
        (!map[nums[i]])? map[nums[i]] = 1 : map[nums[i]]++
        if(map[nums[i]] >= 2)
            return true
    }
    return false
};
