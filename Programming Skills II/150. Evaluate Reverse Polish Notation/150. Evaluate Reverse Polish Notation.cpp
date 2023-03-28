class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> st;
        int t, t2;
        for(int i=0; i<tokens.size(); ++i){
            if(tokens[i] == "+"){
                t = st.top();
                st.pop();
                t2 = st.top();
                st.pop();
                st.push(t+t2);
            }else if(tokens[i] =="-"){
                t = st.top();
                st.pop();
                t2 = st.top();
                st.pop();
                st.push(t2-t);
            }else if(tokens[i] =="*"){
                t = st.top();
                st.pop();
                t2 = st.top();
                st.pop();
                st.push(t2*t);
            }else if(tokens[i] =="/"){
                t = st.top();
                st.pop();
                t2 = st.top();
                st.pop();
                st.push(t2/t);
            }else{
                st.push(stoi(tokens[i]));
            }
        }
        return st.top();
    }
};
