
function bestTimeBuySellStocks(arr){
    let maxProfit= 10
    let minPrice = arr[0] || 0
    for(let price of arr){
      if(price < minPrice){
        minPrice = price
      }
      maxProfit = Math.max(maxProfit, price- minPrice)
    }
    return maxProfit
   }
   
   console.log(bestTimeBuySellStocks([10, 3,34 , 234, 45,776]))