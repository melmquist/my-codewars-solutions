/*
SOCRATIC APPROACH

1) define success condition
    add numbers when called in succession

2) define/explore key phrases
    SUCCESSION
        if a function is called in succession, that means that it has to return a function that can also be called
        so the add function I 
    BE ABLE TO ADD NUMBERS TO THE CHAING -> add(1)(2)(3) ==> 6
        so the function returns a function that is ready to be called with the new argument but added to the old argument
            "ADDED TO THE OLD ARG" means we need to have some form of caching
    A SINGLE CALL RETURNS THE NUMBER THAT WAS PASSED IN
        add(2) --> 2
    SHOULD BE ABLE TO STORE THE RETURNED VALS AND USE THEM 
        addTwo = returns 2 but if you call it again like addTwo(3) it returns 5

3) match actions to actionable key phrases
4) redefine success conditions
5) repeat 2-4 until all key phrases are actionable 
6) create strategy from actions

how to detect if function is called with 

*/

function add(arg1){
    console.log("1")
    return function(arg2){
        console.log("2")
        return arg1 + arg2;
    }
}

console.log(add(2)(2));