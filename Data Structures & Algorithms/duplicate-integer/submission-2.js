class Solution {
    hasDuplicate(nums) {
        for (let i=0; i<nums.length-1;i++){
            for(let j=i;j<nums.length;j++){
                if(nums[i]===nums[j+1]){
                    return true
                }
            }
        }
        return false
    }
}
