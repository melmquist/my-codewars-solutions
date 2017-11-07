/*
SOCRATIC APPROACH

1) define success condition
    takes in number and returns the next biggest number formed with same digits
    if no bigger number can be formed return -1

2) define/explore key phrases
    WITH SAME DIGITS
        so its about permutations and then checking to see if the value of that string permutation is larger, and if multiple take the next biggest


3) match actions to actionable key phrases
    generate all STRING permutations of that number
    output the permutations to an array, sort, find your imput number, then return the next in line or -1 if at end

4) redefine success conditions
5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions
*/

function nextBigger(num) {
    // console.log("NUM: ", num)
    const permutator = (inputArr) => {
        let result = [];
      
        const permute = (arr, m = []) => {
            if (arr.length === 0) {
                result.push(m)
            } else {
                for (let i = 0; i < arr.length; i++) {
                    let curr = arr.slice();
                    let next = curr.splice(i, 1);
                    permute(curr.slice(), m.concat(next))
                }
            }
        }
      
        permute(inputArr)
      
        return result;
    }

    let numString = num.toString()
    let numStringArr = numString.split('');
    let permuteArray = permutator(numStringArr);
    let joinedPermuteArr = permuteArray.map((arr) => {
        return arr.join('')
    })
    joinedPermuteArr = joinedPermuteArr.sort((a,b) => {
        return a - b;
    })
    // console.log("joinedPermuteArr", joinedPermuteArr)
    let uniqueArr = joinedPermuteArr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    })
    // console.log("uniqueArr", uniqueArr)
    
    let origIndex = uniqueArr.indexOf(numString)
    if(origIndex + 1 >= uniqueArr.length) {
        return -1;
    } else {
        return parseInt(uniqueArr[origIndex + 1]);
    }
    
}

// console.log(nextBigger(414));
//Expected: 441, instead got: 414

console.log(nextBigger(144));
//Expected: 414, instead got: 144

// function removeArrDups(array) {
//     array.forEach((item, index) => {
        
//         console.log("item, ", item)
//         console.log("index, ", index)
//         console.log("array.lastIndexOf(item), ", array.lastIndexOf(item))
        
        
        
//         // if(index !== array.lastIndexOf(item)) {
//         //     console.log("array.length BEF", array.length)            
//         //     array.splice(index, 1);
//         //     console.log("array.length AFT", array.length)
//         //     // removeArrDups(array)
//         // }
//     })
// }



// console.log(removeArrDups([ '144', '144', '414', '414', '441', '441' ]));