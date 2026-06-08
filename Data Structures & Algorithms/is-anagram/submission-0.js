class Solution {
    isAnagram(s, t) {
        let temp = Array.from(s).sort().join('')
        console.log(temp)
        let temp2 = Array.from(t).sort().join('')
        if(temp===temp2){
            return true
        }
        return false
    }
}
