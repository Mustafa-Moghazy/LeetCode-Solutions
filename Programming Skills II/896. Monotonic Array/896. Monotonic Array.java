class Solution {
    public boolean isMonotonic(int[] nums) {
        int dif = 0;
        for(int i=0; i<nums.length-1; ++i){
            if(nums[i]!=nums[i+1] && dif == 0)
                dif = nums[i] - nums[i+1];
            else if( ( nums[i] > nums[i+1] && dif < 0 ) || (nums[i] < nums[i+1] && dif > 0) )
                return false;
        }
        return true;
    }
}
