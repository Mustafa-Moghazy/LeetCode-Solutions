/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = (x, y, points)=> {
    let ans = -1, n = points.length, minDis = 10000+5;
    for(let i=0; i<n; ++i){
        if( points[i][0] == x || points[i][1] == y ){ // valid point //
            let curDis = Math.abs(x-points[i][0]) + Math.abs(y-points[i][1]);
            if( curDis < minDis ){
                ans = i;
                minDis = curDis;
            }
        }
    }
    return ans;
};
