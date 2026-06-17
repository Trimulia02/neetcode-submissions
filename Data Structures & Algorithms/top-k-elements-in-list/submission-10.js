class Solution {
    topKFrequent(nums, k) {
        let obj={}
        let bucket= []
        let result=[]
        for (let i =0; i<nums.length; i++){
            if(!obj[nums[i]]){
                obj[nums[i]]=1
            }else{
                obj[nums[i]]++
            } 
        }
        for (const [key, value] of Object.entries(obj)){
            // console.log('key :',key,'value :',value)
            if(!bucket[value]){
                bucket[value] = new Set().add(key)
                // console.log(bucket[value],'bucket[value] = new Set().add(key)')
            }else{
                bucket[value]=bucket[value].add(key)
                // console.log(bucket[value],'bucket[value]=bucket[value].add(key)')
            }
        }
        // console.log(bucket)
        for (let i = bucket.length-1;i>=0;i--){
            if(bucket[i]){
                result.push(...bucket[i])
            }if(result.length === k){
                break
            }
        }
        return result
    }
    }
