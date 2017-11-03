/*
SOCRATIC APPROACH

1) define success condition
    check if a string is able to be constructed from 2 other strings, provided that the order of those other 2 strings is preserved

2) define/explore key phrases
    preserve order and construct new
        almost as if we are shuffling into the output
        we know that we are going to be preserving the order of the 2
        HAVE THE S INPUT BE THE DETERMINING FACTOR

3) match actions to actionable key phrases
    loop through the S input, for each item see if there is that item in the part1 or part2 input
    HOW TO PRESERVE ORDERS OF THOSE 2?
        keep pointer values and reset if match is found using indexOf()
    HOW TO INTELIGENTLY SWITCH BETWEEN THE 2?
        each time you search(loop), search through both, if 2 are found, take the one with the earlier pointer
            maybe keep bool to hold onto whether or not 2 were found and earlier was taken, so that you could call recursively and do it opposite way

4) redefine success conditions
    HANDLING EXTRA CHARACTERS 
        if there is an extra char still left over when the entirety of S has been gone through then you cant make it perfectle
            so need to check at end of S, are pointers to P1 and P2 also at their end.length-1?

5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions


*/

function isMerge(s, part1, part2) {
    console.log('s: ', s)
    console.log('s.length: ', s.length)
    console.log('part1: ', part1)
    console.log('part2: ', part2)
    p1Pointer = -1;
    p2Pointer = -1;
    let totalP1Length = part1.length - 1;
    let totalP2Length = part2.length - 1;
    
    if(s.length === 0 && part1.length === 0 && part2.length === 0) {
        return true;
    }
    if(s.length === 0) {
        return false;
    }

    for(var i = 0; i < s.length; i++) {
        let current = s[i];
        
        console.log("STARTTTTTTTT")
        console.log("part1.indexOf(current) -----> ", part1.indexOf(current))
        console.log("part1.indexOf(current, p1Pointer + 1) -----> ", part1.indexOf(current, p1Pointer + 1))
        console.log("part2.indexOf(current) -----> ", part2.indexOf(current))
        console.log("part2.indexOf(current, p2Pointer + 1) -----> ", part2.indexOf(current, p2Pointer + 1))
        
        if(part1.indexOf(current) > -1 && part1.indexOf(current, p1Pointer + 1) > -1 && part1.indexOf(current, p1Pointer + 1) === p1Pointer + 1) {
            console.log('BOOM11111111')
            // p1Pointer = part1.indexOf(current, p1Pointer + 1);
            p1Pointer++
        } else if(part2.indexOf(current) > -1 && part2.indexOf(current, p2Pointer + 1) > -1 && part2.indexOf(current, p2Pointer + 1) === p2Pointer + 1) {
            console.log('BOOOOOOM2')            
            // p2Pointer = part2.indexOf(current, p2Pointer + 1);
            p2Pointer++;
        } else if(part1.indexOf(current) === -1 && part2.indexOf(current) === -1) {
            console.log("NERPNERPNERPEEREDERP")
            return false;
        } 
        console.log("i: ", i)
        console.log("current: ", current)
        console.log("p1Pointer: ", p1Pointer)
        console.log("p2Pointer: ", p2Pointer)
        
    }
    console.log("p1Pointer: ", p1Pointer)
    console.log("totalP1Length: ", totalP1Length)
    console.log("p2Pointer: ", p2Pointer)
    console.log("totalP2Length: ", totalP2Length)
    
    if(p1Pointer === totalP1Length && p2Pointer === totalP2Length) {
        return true;
    } else {
        return false
    }
    // return true;

}

// add one more check to see if its ONLY one more progression from the previous pointer


// console.log(isMerge('Z@joI0WqNZ@joI0DqI.QKf,', 'Z@joI0DqI.Q', 'Z@joI0WqNKf,'))

console.log(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'))


