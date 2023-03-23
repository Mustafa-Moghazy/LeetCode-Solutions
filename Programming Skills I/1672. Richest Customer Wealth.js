/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans = 0, temp = 0;
    for(let i = 0; i<accounts.length; ++i){
        for(let j=0; j<accounts[i].length; ++j){
            temp += accounts[i][j];
        }
        ans = Math.max(ans,temp);
        temp = 0;
    }
    return ans;
};
