/*
    Problem is with double starts in part 1 and part 2 is that the pointers get adjusted and then don't know how to restart
        SO Im thinking of doing a cache IF both things have been seen before so both pointers are moved down
*/

function isMerge(s, part1, part2) {
    console.log("S: ", s)
    console.log("part1: ", part1)
    console.log("part2: ", part2)

    function deepEqual(x, y) {
        return (x && y && typeof x === 'object' && typeof y === 'object') ?
            (Object.keys(x).length === Object.keys(y).length) && Object.keys(x).reduce(function(isEqual, key) {
                return isEqual && deepEqual(x[key], y[key]);
            }, true) : (x === y);
    }

    let partsIndex = {};
    let sIndex = {};    
    
    p1Pointer = 0;
    p2Pointer = 0;
    let totalP1Length = part1.length;
    let totalP2Length = part2.length;
    console.log("totalP1Length: ", totalP1Length)
    console.log("totalP2Length: ", totalP2Length)
    console.log("BEFORE LOOOOOOP --------------------- ")
    
    if(s.length === 0 && part1.length === 0 && part2.length === 0) {
        return true;
    }
    if(s.length === 0) {
        return false;
    }

    for(var i = 0; i < s.length; i++) {
        let current = s[i];
        console.log("Current ------------------******> ", current)
        console.log("p1Pointer: ", p1Pointer)
        console.log("p2Pointer: ", p2Pointer)
        let bothCache = [];
        
        (sIndex.hasOwnProperty(current)) ? sIndex[current]++ : sIndex[current] = 1;
        
        
        // IF WE SEE IN BOTH< MAKE A CACHE STRING AND MOVE ALONG BOTH PINTERS THEN UNSHIFT FROM THE CACHE
        if(part1[p1Pointer] === current && part2[p2Pointer] === current) {
            
            (partsIndex.hasOwnProperty(part1[p1Pointer])) ? partsIndex[part1[p1Pointer]]++ : partsIndex[part1[p1Pointer]] = 1;
            (partsIndex.hasOwnProperty(part2[p2Pointer])) ? partsIndex[part2[p2Pointer]]++ : partsIndex[part2[p2Pointer]] = 1;
            

            bothCache.push(part1[p1Pointer])
            p1Pointer++;
            p2Pointer++;
        }
        else if(part1[p1Pointer] === current) {
            (partsIndex.hasOwnProperty(part1[p1Pointer])) ? partsIndex[part1[p1Pointer]]++ : partsIndex[part1[p1Pointer]] = 1;            
            console.log("#1************")
            p1Pointer++;
        } else if(part2[p2Pointer] === current) {
            (partsIndex.hasOwnProperty(part2[p2Pointer])) ? partsIndex[part2[p2Pointer]]++ : partsIndex[part2[p2Pointer]] = 1;            
            console.log("#2************")            
            p2Pointer++;
        } else if(bothCache[0] === current) {
            bothCache.shift();
        } else if(part1.indexOf(current) === -1 && part2.indexOf(current) === -1) {
            console.log("#THREE************")            
            return false;
        } else {
            console.log("CATCH")
            
        }

    }



    console.log("OUT LOOP DONE ----------------")
    console.log("S INDEX -----------", sIndex)
    console.log("PARTS INDEX -----------", partsIndex)
    console.log(deepEqual(sIndex, partsIndex));

    if(p1Pointer === totalP1Length && p2Pointer === totalP2Length && deepEqual(sIndex, partsIndex)) {
        console.log("#11111111************")
        
        return true;
    } else {
        console.log("#22222222************")
        
        return false
    }

}



// console.log(isMerge('Z@joI0WqNZ@joI0DqI.QKf,', 'Z@joI0DqI.Q', 'Z@joI0WqNKf,'))

console.log(isMerge('codewars', 'codes', 'wars'));


