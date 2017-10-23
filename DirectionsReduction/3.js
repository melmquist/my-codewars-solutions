/*

go through, look at each pair.
when it encounters a pair, take it out and call itself again with new array pair taken out
Base Case if go through without oppFound being switched to true, then return the array

*/ 

const dirReduce = (arr) => {

    if (arr.length < 2) {
        return arr;
    }
    
    
    let oppFound = false;
    
    let cache = arr[0];

    for (i = 1; i <= arr.length - 1; i++) {
        let current = arr[i];

        // console.log('pairs: ', cache, current)

        if(cache === "NORTH" && current === "SOUTH"){
            console.log("OPP FOUND", cache, current)
        } else if(cache === "SOUTH" && current === "NORTH"){
            console.log("OPP FOUND", cache, current)
        } else if(cache === "EAST" && current === "WEST"){
            console.log("OPP FOUND", cache, current)
        } else if(cache === "WEST" && current === "EAST"){
            console.log("OPP FOUND", cache, current)
        }

        cache = current;
        
    }

    // console.log("OUTPUT ARR: ", outputArr)

}

let test1 = ["NORTH", "SOUTH", "EAST", "WEST"];
let test2 = ["NORTH","NORTH","NORTH", "WEST"];

dirReduce(test1)
// dirReduce(test2)