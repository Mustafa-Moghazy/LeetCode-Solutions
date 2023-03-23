/**
 * @param {string} s
 * @return {string}
 */

const intToChar = (int) => {
  const code = 'a'.charCodeAt(0);
  return String.fromCharCode(code + int);
}
var freqAlphabets = function(s) {
    let ans = "";
    for(let i=0; i<s.length; ++i){
        if(s[i+2] === '#'){
            let t = s[i] + s[i+1];
            t = Number(t);
            ans += intToChar(t-1);
            i+=2;
        }
        else
            ans += intToChar(Number(s[i])-1);
    }
    return ans;
};
