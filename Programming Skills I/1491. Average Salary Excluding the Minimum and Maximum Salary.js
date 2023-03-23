/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary)=> {
    let avg = 0.0;
    salary.sort((a, b) => a - b);
    for(let i=1; i<salary.length-1; ++i){
        avg += salary[i];
    }
    return avg / (salary.length - 2);
};
