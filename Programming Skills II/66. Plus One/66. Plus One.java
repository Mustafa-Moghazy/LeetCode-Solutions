class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;
        for(int i=n-1; i>=0; --i){
            if( digits[i] != 9 ){
                digits[i]++;
                return digits;
            }else{
                digits[i]=0;
            }
        }
        int [] ans = new int[n+1];
        ans [0] = 1;
        int i = 1;
        for(int elm : digits ){
            ans [i] = elm;
            i++;
        }
        return ans;
    }
}
