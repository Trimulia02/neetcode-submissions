class Solution {
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l]);
                console.log(charSet,'masuk while')
                l++;
            }
            charSet.add(s[r]);
            console.log(charSet,'nambah')
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
