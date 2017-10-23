/*

use cache to hold onto last item (but set it as first item )
if last item index of = -1 and current item index of =-1 then push
*/ 

const dirReduce = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    let latOp = ["NORTH", "SOUTH"];
    let longOp = ["EAST", "WEST"];

    let outputArr = [];
    
    let cache = arr[0];

    for (i = 1; i <= arr.length - 1; i++) {
        let current = arr[i];

        // if (latOp.indexOf(cache) === -1 && latOp.indexOf(current) === -1) {
        //     outputArr.push(cache, current);
        // }
        
        // if (longOp.indexOf(cache) === -1 && longOp.indexOf(current) === -1) {
        //     outputArr.push(cache, current);
        // }

        console.log('pairs: ', cache, current)
        cache = current;
        
    }

}

let test1 = ["NORTH", "SOUTH", "EAST", "WEST"];

dirReduce(test1)