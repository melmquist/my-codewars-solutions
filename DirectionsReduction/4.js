/*

1) define success condition
    only opposite directions are taken out
2) defined explore key phrases
    only take out direct opposites
        go through and create pairs {index: 3, val: "NORTH"}
        
        for loop through pairs, if pairs fulfill direct opposite case, take all items from ORIG array index and all after and put into NEW
        if NEW and ORIG have same lengths, return new, else recursively call func with NEW

*/

function dirReduc(dirArr) {
    let newArr;
    let allPairs = [];

    for(var i = 1; i < dirArr.length; i++) {
        let first = {
            index: i - 1,
            value: dirArr[i - 1]
        }
        let second = {
            index: i,
            value: dirArr[i]
        }
        allPairs.push([first, second])
    }
    // console.log("ALL PA:", allPairs)

    allPairs.forEach((pairArr) => {
        let first = pairArr[0];
        let second = pairArr[1]

        if(directOppBool(first.value, second.value)) {
            newArr = dirArr.slice(0, first.index).concat(dirArr.slice(second.index + 1))
        }

    })

    // console.log("dirArr LEN", dirArr)
    // console.log("newArr LEN", newArr)

    if(newArr === undefined || dirArr.length === newArr.length) {
        return dirArr;
    } else {
        return dirReduc(newArr);
    }
    
}



function directOppBool(a, b) {
    if(a === "NORTH" && b === "SOUTH") {
        return true;
    } else if(a === "SOUTH" && b === "NORTH") {
        return true;
    } else if(a === "EAST" && b === "WEST") {
        return true;
    } else if(a === "WEST" && b === "EAST") {
        return true;
    } else {
        return false;
    }
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]))
// => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
