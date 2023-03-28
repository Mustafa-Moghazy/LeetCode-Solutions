class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        int c = 0, res = 0, n = num.length;
        List<Integer> ans = new ArrayList<>();
        for(int i = n-1; (i>=0 || k>0); --i, k/=10){
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
                    ans.add(0, k%10+c);
                    c = 0;
                }else{
                    res = k%10 + c;
                    ans.add(0, res%10);
                    c = res/10;
                }
            }
        }
        if(c > 0) ans.add(0, c);
        for(int i=0; i<n; ++i)
            ans.add(num[i]);
        return ans;      
    }
}
