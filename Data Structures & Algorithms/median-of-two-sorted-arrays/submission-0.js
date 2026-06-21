class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let list = [...nums1,...nums2]
        list.sort((a, b) => a - b);
        console.log(list)
        let res=0
        if(list.length % 2 ===0){
            res = (list[(list.length / 2)-1] + list[(list.length / 2)])/2
        }else{
            res = list[Math.floor(list.length / 2)]
        }return res
    }
}
