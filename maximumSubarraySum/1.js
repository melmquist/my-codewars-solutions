/*
1) define success condition
    find max sum from contigous subset of integers inside the array
    if list is all negatives, return 0
    best case would be all positives so return sum

2) define/explore key phrases
    max from CONTIGOUS 
        has to be all in a row

3) match actions to actionable key phrases
    is there any way to intelligently group rather than brute force?
        BRUTE FORCE nested for loops, saving objects of {start: 1, end: 2, sum:432}
        sum ==> copy - arr.slice(start/end).reduce

4) redefine success conditions

*/ 

var maxSequence = function(arr) {
    // console.log("ARR--> ",arr)
    if(arr.length === 0) {
        return 0;
    } 
    
    if(arr.length === 1 && arr[0] >= 0) {
        return arr[0];
    } 
    if(arr.length === 1 && arr[0] < 0) {
        return 0;
    } 
    
    let highestSumCache = [];

    for(var i = 0; i < arr.length; i++) {
        for(var j = i ; j < arr.length; j++) {
            let start = i;
            let end = j + 1;
            let sum = arr.slice(start, end).reduce((a, b) => {
                return a + b;
            })
            highestSumCache.push({start: start, end: end, sum: sum})
        }
    }

    highestSumCache.sort((a, b) => {
        return b.sum - a.sum;
    })

    // console.log("HSC====",highestSumCache)
    // console.log("slice ", arr.slice(highestSumCache[0].start, highestSumCache[0].end))
    if(highestSumCache[0].sum < 0) {
        return 0;
    }
    return highestSumCache[0].sum;
}


//Expected: 49, instead got: 44
var test1 = [ 49, -25, -49, -32, -41, -9, -2, 17, -34, 35, 9, -8, -13, -15 ]
console.log(maxSequence(test1));
    