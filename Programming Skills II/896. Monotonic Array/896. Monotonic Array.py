class Solution(object):
    def isMonotonic(self, nums):
        dif = 0
        for i in range( len(nums) -1):
            if nums[i] != nums[i+1] and dif == 0 :
                dif = nums[i] - nums[i+1]
            elif (nums[i] > nums[i+1] and dif < 0)  or (nums[i] < nums[i+1] and dif > 0) :
                return False
        return True
