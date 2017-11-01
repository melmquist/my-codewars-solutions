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
5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions
*/

function isMerge(s, part1, part2) {
    console.log('s: ', s)
    console.log('part1: ', part1)
    console.log('part2: ', part2)
    p1Pointer = 0;
    p2Pointer = 0;
    if(s.length === 0) {
        return false;
    }

    for(var i = 0; i < s.length; i++) {
        let current = s[i];

        if(part1.indexOf(current) > -1 && part1.indexOf(current) >= p1Pointer) {
            console.log('boom1')
            p1Pointer = part1.indexOf(current);
        } else if(part2.indexOf(current) > -1 && part2.indexOf(current) >= p1Pointer) {
            p2Pointer = part2.indexOf(current);
            console.log('boom2')            
        } else if(part1.indexOf(current) === -1 && part2.indexOf(current) === -1) {
            console.log("NERPNERPNERPEEREDERP")
            return false;
        } 

        console.log("i: ", i)
        console.log("current: ", current)
        console.log("p2Pointer: ", p2Pointer)
        console.log("p1Pointer: ", p1Pointer)
    }
    return true;

}
console.log(isMerge('', 'no', 'siree'))
// 'codewars' is a merge from 'cdw' and 'oears':

// s:  codewars
// part1:  codewars
// part2: