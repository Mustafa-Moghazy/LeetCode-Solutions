class Solution {
public:
    /*
        If the original string has a repeating substring, the repeating substring   
        can be no larger than 1/2 the length of the original string.
        By doubling the input string and removing the first and last character,
        if the original string can be found it means that the string made up by
        repeating one of its a substring.
    */
    bool repeatedSubstringPattern(string s) {
        string d = s + s; // double the string //
        d = d.substr(1, d.size()-2); // remove first and last char //
        return d.find( s ) != -1;
    }
};
