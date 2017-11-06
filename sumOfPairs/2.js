/*
SOCRATIC APPROACH

1) define success condition
    find the 2 numbers in the array that add up to the given sum

2) define/explore key phrases
    FIRST pair that adds up -> its about where the entirety of the pair occurs so it must END FIRST if there are collisions
    
3) match actions to actionable key phrases
    in order to find PAIRS and check their sum, pretty sure that we NEED nested forLoop
        Nested forloop check all pairs for sum, if same as input, push to a cache with {start: end}

4) redefine success conditions
5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions
*/

var sum_pairs = function(array, sum) {
    console.log("ARR: ", array)
    console.log("SUM: ", sum)
    let cacheArray = [];

    for(var i = 0; i < array.length; i++) {
        for(var j = i + 1; j < array.length; j++) {
            var first = array[i]
            var second = array[j]
            if(first + second === sum) {
                cacheArray.push({start: i, end: j})
                break;
            }
        }
        break;
    }
    if(cacheArray.length === 0) {
        return undefined;
    }
    // console.log("B", cacheArray)
    cacheArray.sort((a,b) => {
        return a.end - b.end;
    })
    // console.log("A", cacheArray)
    
    return [array[cacheArray[0].start], array[cacheArray[0].end]];
}


// console.log(sum_pairs([ 1, 4, 8, 7, 3, 15 ], 8));
console.log(sum_pairs([ 1, 2, 3, 4, 1, 0 ], 2));