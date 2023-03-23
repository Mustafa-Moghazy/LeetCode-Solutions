/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(s) {
    let ans = "";
    for(let i=0; i<s.length; ++i){
        if(s[i] == "G")
            ans += "G";
        else if( s[i] == "(" && s[i+1] == ")" ){
            ans += "o";
            i++;
        }
        else if( s[i] == "(" && s[i+1] == "a" ){
            ans += "al";
            i += 3;
        }
    }
    return ans;
};
