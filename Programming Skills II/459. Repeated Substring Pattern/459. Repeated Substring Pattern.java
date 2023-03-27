class Solution {
    public boolean repeatedSubstringPattern(String s) {
        if( s.length() == 1 ) return false;
        String d = s + s;
        d = d.substring(1, d.length() - 1);
        //System.out.print(d);
        return d.indexOf(s) != -1;
    }
}
