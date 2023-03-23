/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n)=> {
    let s = n.toString(2); // convert n to string binary based
    let myArray = s.split("0"); // split the string into array without including "0"
    let ans = myArray.join(""); // convert myArray to string
    return ans.length;
};
