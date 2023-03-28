class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        int n = num.size();
        int c = 0, res = 0;
        for(int i=n-1; (i>=0 || k>0); --i){
            if( i >= 0 ){
                if( k%10 + num[i] + c <= 9 ){
                    num[i] += k%10+c;
                    c = 0;
                }else{
                    res = num[i] + k%10 + c;
                    num[i] = res%10;
                    c = res/10;
                }
            }else{
                if( k%10 + c <= 9 ){
                    num.insert(num.begin(), k%10+c);
                    c = 0;
                }else{
                    res = k%10 + c;
                    num.insert(num.begin(), res%10);
                    c = res/10;
                }
            }
            k /= 10;
        }
        if( c > 0 )
            num.insert(num.begin(), c);
        return num;
    }
};
