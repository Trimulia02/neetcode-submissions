class Solution {
    isValid(s) {
        if(s.length < 2) return false
        let stack =[]
        for(let i=0; i< s.length;i++){
            switch(s[i]){
                case '[': 
                case '(': 
                case '{': stack.push(s[i])
                continue
                case ']': if(stack.pop()!=='[') return false
                continue
                case ')': if(stack.pop()!=='(') return false
                continue
                case '}': if(stack.pop()!=='{') return false
            }
        }
        return stack.length === 0
    }
}
