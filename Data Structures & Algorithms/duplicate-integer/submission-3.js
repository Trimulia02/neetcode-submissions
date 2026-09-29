class Solution {
    hasDuplicate(nums) {
        let seen = new Set()
        for(const x of nums){
            if(seen.has(x)) return true
            seen.add(x)
    }
    return false
    }
}
