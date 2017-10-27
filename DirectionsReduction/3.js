/*

go through, look at each pair.
when it encounters a pair, take it out and call itself again with new array pair taken out
Base Case if go through without oppFound being switched to true, then return the array





*/ 

const dirReduce = (arr) => {

    if (arr.length < 2) {
        return arr;
    }
    let holdArray = []
  
    for (i = 0; i <= arr.length - 1; i++) {
        console.log("holdArray FOR LOOP: ", holdArray)

        if(arr[i] === "NORTH" && arr[i-1] === "SOUTH"){
            holdArray.pop();
        } else if(arr[i] === "SOUTH" && arr[i+1] === "NORTH"){
            holdArray.pop();
        } else if(arr[i] === "EAST" && arr[i+1] === "WEST"){
            holdArray.pop();
        } else if(arr[i] === "WEST" && arr[i+1] === "EAST"){
            holdArray.pop();
        } else {
            holdArray.push(arr[i])
        }
    }

    console.log("holdArray ARR: ", holdArray)

}

let test1 = ["NORTH", "SOUTH", "EAST", "WEST"];
let test2 = ["NORTH","NORTH","NORTH", "WEST"];

let test3 = ["NORTH", "NORTH", "EAST", "WEST", "NORTH", "NORTH", "SOUTH"];
let test4 = ["NORTH", "NORTH", "EAST", "WEST", "NORTH", "NORTH"];
dirReduce(test3)
// dirReduce(test2)