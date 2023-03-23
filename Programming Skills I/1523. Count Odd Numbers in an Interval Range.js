/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high)=> {
    let n = ( high - low + 1 );
    if( low%2 && high%2 ) n++;
    return Math.floor(n/2);
};
