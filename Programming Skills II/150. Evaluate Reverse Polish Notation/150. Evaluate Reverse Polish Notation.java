class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> st = new Stack();
        int t, t2;
        for(int i=0; i<tokens.length; ++i){
            if(tokens[i].equals("+")){
                t = st.pop();
                t2 = st.pop();
                st.push(t+t2);
            }else if(tokens[i].equals("-")){
                t = st.pop();
                t2 = st.pop();
                st.push(t2-t);
            }else if(tokens[i].equals("*")){
                t = st.pop();
                t2 = st.pop();
                st.push(t2*t);
            }else if(tokens[i].equals("/")){
                t = st.pop();
                t2 = st.pop();
                st.push(t2/t);
            }else{
                st.push( Integer.parseInt((tokens[i])) );
            }
        }
        return st.pop();
    }
}
