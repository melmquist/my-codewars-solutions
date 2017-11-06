/*
SOCRATIC APPROACH

MUST FIND O(n) solution because test cases mean you to time out with O(n^2)

make an object that caches based on the num
one for loop, 
    if (!cacheObject.hasOwnProperty(item)){
        add it to object
    }
    SUM - current item = the prop you're looking for on the object

*/

var sum_pairs = function(array, sum) {
    console.log("ARR: ", array)
    console.log("SUM: ", sum)
    let cacheObject = {};

    for(var i = 0; i < array.length; i++) {
        let number = array[i];
        console.log("number: ", number)
        
        let desiredSumDif = sum - number;
        console.log("desiredSumDif: ", desiredSumDif)
        
        if(cacheObject.hasOwnProperty(desiredSumDif.toString())) {
            return [desiredSumDif, number];
        }

        if(!cacheObject.hasOwnProperty(number)){
            cacheObject[number] = number;
        }
    }

    // return cacheObject;

}


// console.log(sum_pairs([ 1, 4, 8, 7, 3, 15 ], 8));
console.log(sum_pairs([ 1, 4, 8, 7, 3, 15 ], 8));