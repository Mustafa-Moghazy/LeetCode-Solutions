/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let map = {};
    for(let i=0; i<arr.length; ++i){
        let t = arr[i], cnt = 0;
        while(t){
            cnt += t%2;
            t = Math.floor(t/2);
        }
        map[arr[i]] = cnt;
    }
    // sort by number of (1) or the orignal value //
    return arr.sort((a, b)=> map[a]-map[b] || a - b);
};
