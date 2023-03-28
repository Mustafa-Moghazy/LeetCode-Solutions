/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let t = 0, t1 = 0;
    for( i in tokens ){
        if(tokens[i] == "+"){
            t = stack.pop();
            t1 = stack.pop();
            stack.push(t+t1);
        }else if(tokens[i] == "-"){
            t = stack.pop();
            t1 = stack.pop();
            stack.push(t1-t);
        }else if(tokens[i] == "*"){
            t = stack.pop();
            t1 = stack.pop();
            stack.push(t*t1);
        }else if(tokens[i] == "/"){
            t = stack.pop();
            t1 = stack.pop();
            stack.push( parseInt((t1/t), 10) );
        }else{
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};
