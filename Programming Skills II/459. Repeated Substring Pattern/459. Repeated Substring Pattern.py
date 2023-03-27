class Solution(object):
    def repeatedSubstringPattern(self, s):
        d = s + s
        return d[1:len(d)-1].find(s) != -1
