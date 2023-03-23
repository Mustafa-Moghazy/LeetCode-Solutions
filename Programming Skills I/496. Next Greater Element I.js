/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const findNext = ( j, nums2 )=>{
    for(let i=j+1; i<nums2.length; ++i){
        if(nums2[i] > nums2[j])
            return nums2[i];
    }
    return -1;
}
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for(let i=0; i<nums1.length; ++i){
        for(let j=0; j<nums2.length; ++j){
            if(nums1[i] == nums2[j]){
                ans.push(findNext(j, nums2));
                break;
            }
        }
    }
    return ans;
    
};
