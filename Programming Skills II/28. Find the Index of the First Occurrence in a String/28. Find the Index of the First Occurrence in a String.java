class Solution {
    public int strStr(String haystack, String needle) {
        int n = haystack.length(), m = needle.length();
        for(int i=0; i<=n-m; ++i){
            if(haystack.charAt(i) == needle.charAt(0)){
                if( haystack.substring(i, i+m).equals(needle) )
                    return i;
            }
        }
        return -1;
    }
}
