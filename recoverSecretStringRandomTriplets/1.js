/*
SOCRATIC APPROACH

1) define success condition
    figure out what the secret string is given a set of triplet strings
    each letter in triplet occurs before the other letters of the triplet in the original string
    no letters repeat in the secret string
    all letters in triplets make up the string
    

2) define/explore key phrases
    ORDER IS PRESERVED
        each triplet tells you something about the ordering of the secret
    NO LETTERS REPEAT
        any time you see the same letter for the second time, you know you are seeing a repeat and any new relational info can be mapped
    ALL TRIPLET LETTERS MAKE UP THE STRING

3) match actions to actionable key phrases
    HOW TO HANDLE THE REARRANGING OF THE LETTERS WHEN YOU GET NEW INFORMATION ON THEIR LOCATION
        because each time you should get 123, 123, 123 

4) redefine success conditions
    figure out what the order of the secret string is after you've put all in an array? because if you loop through all, get uniques, then the only thing needed is order
    HOW TO MAKE SURE, oh you are in between these two so lets move you



5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions
    take unique array un sorted, go through each sub array and say to [1], is your indexOf greater than [0]'s and less than [2]'s?
        if not, slice you out and insert you into the middle point index with Math --> maybe just insert you right after [0]'s index point


*/

var recoverSecret = function(triplets) {
    console.log("triplets: ", triplets)
    let uniqueObj = {};

    triplets.forEach((item) => {
        item.forEach((char) => {
            if(uniqueObj.hasOwnProperty(char)) {
                uniqueObj[char]++
            } else {
                uniqueObj[char] = 1;
            }
        })
    })

    let uniqueArr = Object.keys(uniqueObj);
    console.log("uniqueArr: ", uniqueArr)
    
    triplets.forEach((item) => {
        let first = item[0];
        let second = item[1];
        let third = item[2];

        let indexInArrOfFirst = uniqueArr.indexOf(first)
        let indexInArrOfSecond = uniqueArr.indexOf(second)
        let indexInArrOfThird = uniqueArr.indexOf(third)

    })
    
}



let triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
]


let triplets2 = [ [ 'l', 'e', 'd' ],
[ 'o', 'e', 'd' ],
[ 'o', 'l', 'e' ],
[ 'o', 'v', 'e' ],
[ 's', 'o', 'l' ],
[ 's', 'e', 'd' ],
[ 's', 'l', 'e' ],
[ 'v', 'e', 'd' ],
[ 'o', 'l', 'v' ],
[ 'l', 'v', 'd' ] ]


console.log(recoverSecret(triplets2))