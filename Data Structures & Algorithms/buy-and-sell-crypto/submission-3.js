class Solution {
    maxProfit(prices) {
        let res=0
        for(let i=0;i<prices.length;i++){
            let temp = 0
            for(let j=i+1; j<prices.length;j++){
                temp = prices[j]-prices[i]
                if(temp > res){
                    res=temp
                }
            }
        }return res
    }
}
