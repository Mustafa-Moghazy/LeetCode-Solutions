class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for i in tokens:
            if i == "+":
                t = stack.pop()
                t1 = stack.pop()
                stack.append(t+t1)
            elif i == "-":
                t = stack.pop()
                t1 = stack.pop()
                stack.append(t1-t)
            elif i == "*":
                t = stack.pop()
                t1 = stack.pop()
                stack.append(t1*t)
            elif i == "/":
                t = stack.pop()
                t1 = stack.pop()
                stack.append( int(t1/t) )
            else:
                stack.append(int(i))
        
        return stack.pop()
            
