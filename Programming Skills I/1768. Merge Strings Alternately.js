/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = "", w1 = 0, w2 = 0;
    while(w1 < word1.length || w2 < word2.length){
        if(w1 < word1.length )
            ans += word1[w1];
        if(w2 < word2.length )
            ans += word2[w2];
        
        w1++; w2++;
    }
    return ans;
};
