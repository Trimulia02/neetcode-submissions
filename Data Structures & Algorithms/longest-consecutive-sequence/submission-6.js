class Solution {
    longestConsecutive(nums) {
    //    if(nums.length<1) return 0
       let res = 0
       const store = new Set(nums)
       for(let i=0;i<nums.length;i++){
            let streak = 0
            let curr = nums[i]
            while(store.has(curr)){
                streak++
                curr++
            }res= Math.max(res, streak)
       }return res
    }
}
