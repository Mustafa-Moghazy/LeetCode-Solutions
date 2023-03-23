/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const findSlope = (x1, y1, x2, y2)=>{
    if (x2 - x1 != 0)
        return (y2 - y1) / (x2 - x1);

    return Number.MAX_VALUE;
}
var checkStraightLine = function(points) {
    let slope = findSlope(points[0][0], points[0][1], points[1][0], points[1][1]);
    for(let i=2; i<points.length; ++i){
        if( slope !== findSlope(points[i][0], points[i][1], points[i-1][0], points[i-1][1]))
            return false;
    }
    return true;
};
