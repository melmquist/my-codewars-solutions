/*
SOCRATIC APPROACH

1) define success condition
    all numbers are reordered given this new system

2) define/explore key phrases
    new system says that numbers are WEIGHTED by the sum of all their digits together
    if 2 numbers have the same weight, order them based on their string vals

3) match actions to actionable key phrases
    go through array, each item must be inspected and summed up
    push to cacheArray {orig: 12, weight: 9}
    sort the array based off of weight -> May need custom sort function to deal with control flow if weights are same
    then loop and push that sorted array to output array of original values

4) redefine success conditions
5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions
*/

function orderWeight(string) {
    if(string.length === 0) {
        return '';
    }
    let array = string.split(' ');
    console.log('string: ', string)
    let cacheArray = [];
    let outputArray = [];

    array.forEach((item) => {
        let itemArray = item.split('');
        let weightSum = itemArray.reduce((a,b) => {
            return parseInt(a) + parseInt(b);
        })
        cacheArray.push({orig: item, weight: weightSum})
    })

    // console.log("cacheArray BEFORE", cacheArray)

    cacheArray.sort((a, b) => {
        if(a.weight == b.weight) {
            return a.orig > b.orig ? 1 : a.orig < b.orig ? -1 : 0;
        }
        return a.weight > b.weight ? 1 : -1;
    })

    console.log("cacheArray After", cacheArray)

    cacheArray.forEach((item) => {
        outputArray.push(item.orig);
    })

    return outputArray.join(' ')
}

console.log(orderWeight("71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81"));

// Expected: '   1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703', 
// instead got: '1 2 200 4 4 6 6 7 7 18 27 72 9 81 91 425 31064 7920 67407 96488 34608557 71899703'