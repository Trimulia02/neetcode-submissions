class Solution {
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let str=''
        for (let i=s.length-1;i>=0;i--){
            str +=s[i]
        }
        return str === s
    }
}
