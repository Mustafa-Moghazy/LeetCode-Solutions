/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const powers = [];
    while (n !== 1) {
        if (powers.includes(n))
            return false;
        powers.push(n);
        n = n.toString().split('').map(i => i**2).reduce((sum, i) => sum + i, 0);
    }
    return true;
};
