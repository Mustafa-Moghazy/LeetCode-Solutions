/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n)=> {
    let arr = n.toString()
    let product = 1, sum = 0
    for(let i=0; i<arr.length; ++i){
        product *= arr[i] - '0'
        sum += arr[i] - '0'
    }
    return product - sum
};
