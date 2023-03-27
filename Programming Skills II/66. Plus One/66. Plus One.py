import numpy as np
class Solution(object):
    def plusOne(self, digits):
        for i in reversed(range(len(digits))):
            if digits[i] != 9:
                digits[i] += 1
                return digits
            else:
                digits[i] = 0
        
        digits = np.insert(digits, 0, 1)
        return digits
