class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();
        int i = n-1;
        for(; i>=0; --i){
            if(digits[i] != 9){
                digits[i]++;
                return digits;
            }else{
                digits[i] = 0;
            }
        }
        vector<int> ans;
        ans.push_back(1);
        ans.insert(ans.end(), digits.begin(), digits.end());
        return ans;
    }
};
