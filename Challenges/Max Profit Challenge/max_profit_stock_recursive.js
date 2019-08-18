//Program to get the maximum profit (in retrospect) for buying and selling
//one share of a particular stock for a given range of days. Each item
//in the array represents the buy and sell value, try to do it recursively


let profit = null;

function getMaxProfit(arr){
    if(arr.length === 0) return 0;

    let start = 0;
    let end = arr.length - 1;

    getMaxProfitRecursive(arr, start, end);

    return profit;
}

function getMaxProfitRecursive(arr, start, end){
    if(start < end){
        let mid = Math.floor((start+end)/2);
        getMaxProfitRecursive(arr, start, mid);
        getMaxProfitRecursive(arr, mid+1, end);
        let difference = getMaxWithinRange(arr,mid+1, end) - getMinWithinRange(arr, start, mid);
        if(profit){
            if(difference > profit) profit = difference;
        }
        else{
            profit = difference;
        }
    }
}

function getMinWithinRange(arr, start, mid){
    let min = arr[start];
    for(let i = start+1; i <= mid; i++){
        if(arr[i] < min) min = arr[i];
    }
    return min;
}

function getMaxWithinRange(arr, mid, end){
    let max = arr[mid];
    for(let i = mid+1; i <= end; i++){
        if(arr[i] > max) max = arr[i];
    }
    return max;
}

profit = getMaxProfit([5, 12, 10, 14, 19, 22, 16, 4]);
console.log(profit);
