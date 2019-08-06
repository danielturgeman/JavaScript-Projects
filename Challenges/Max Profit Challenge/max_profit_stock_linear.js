//Program to get the maximum profit (in retrospect) for buying and selling
//one share of a particular stock for a given range of days. Each item
//in the array represents the buy and sell value

function getMaxProfit(arr){

    if(arr.length === 0 || arr.length === 1) return 0;

    let min = 0;
    let maxProfit = Number.NEGATIVE_INFINITY;

    for(let i = 1; i < arr.length; i++){
        let profit = arr[i] - arr[min];
        if(profit > maxProfit) maxProfit = profit;
        if(arr[i] < arr[min]) min = i;
    }

    return maxProfit;
}

prices1 = [8,4,12,13,9,34,16,2,22,44,88,40,20,100,140];
console.log(getMaxProfit(prices1));
prices2 = [1,2,3,4,5,6,7,8];
console.log(getMaxProfit(prices2));
prices3 = [8,7,6,5,4,3,2,1];
console.log(getMaxProfit(prices3));





