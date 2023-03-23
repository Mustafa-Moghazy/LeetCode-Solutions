class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        int n = nums.size(), dif = 0;
        for(int i=0; i<n-1; ++i){
            if(nums[i] != nums[i+1] && dif == 0 )
                dif = nums[i] - nums[i+1]; 
            else if( (nums[i] > nums[i+1] && dif < 0)  || (nums[i] < nums[i+1] && dif > 0) )
                return false;
        }
        return true;
    }
};
