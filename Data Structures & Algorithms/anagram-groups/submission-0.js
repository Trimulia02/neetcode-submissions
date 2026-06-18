class Solution {
    groupAnagrams(strs) {
        let res = {}
        for (let i=0;i<strs.length;i++){
            let num = strs[i].split("").sort().join("")
            if(!res[num]){
                res[num]=[]
            }res[num].push(strs[i])
        }
        return Object.values(res)
    }
}
