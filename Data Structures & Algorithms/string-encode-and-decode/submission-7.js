class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // if(strs.length<2) return strs[0]
        let res = ''
        for(let i=0;i<strs.length;i++){
            res+=String(strs[i].length)+ "#"+strs[i]
        }
            return res
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let res=[]
        let i = 0
        while(i<str.length){
            let j=i
            while(str[j] !== '#'){
                j++
            }
            let leng = Number(str.substring(i,j))
            i=j+1
            j=i+leng
            res.push(str.substring(i,j))
            i=j
        }
        return res
    }
}
