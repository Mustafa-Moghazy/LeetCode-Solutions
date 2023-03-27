/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let d = s + s
    d = d.substring(1, d.length - 1)
    return d.indexOf(s) != -1
};
