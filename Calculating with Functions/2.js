/*
SOCRATIC APPROACH

1) define success condition
    each calculation consists of 2 numbers and one operator
    outermost function is the left, inner most function is the right


2) define/explore key phrases
    ARGUMENTS OBJECt
    OPERATORS will always have 1 argument
    OPERANDS will either have 2 or 0 arguments
        if 0 return the num itself
        if 2 return itself plus arg 0 and arg 1

3) match actions to actionable key phrases

4) redefine success conditions

5) repeat 2-4 until all key phrases are actionable 

6) create strategy from actions

*/


function zero() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("0" + args[0]);
    } else {
        return "0";
    }
}

function one() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("1" + args[0]);
    } else {
        return "1";
    }
}
function two() {
    var args = [].slice.call(arguments);
    // console.log("two", args)
    // console.log("two", args.length)
    if(args.length > 0) {
        return eval("2" + args[0]);
    } else {
        return "2";
    }
}
// 
// 
function three() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("3" + args[0]);
    } else {
        return "3";
    }
}
function four() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("4" + args[0]);
    } else {
        return "4";
    }
}
function five() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("5" + args[0]);
    } else {
        return "5";
    }
}
function six() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("6" + args[0]);
    } else {
        return "6";
    }
}
function seven() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("7" + args[0]);
    } else {
        return "7";
    }
}
function eight() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("8" + args[0]);
    } else {
        return "8";
    }
}
function nine() {
    var args = [].slice.call(arguments);
    // console.log("one", args)
    // console.log("one", args.length)
    if(args.length > 0) {
        return eval("9" + args[0]);
    } else {
        return "9";
    }
}
// 
// 
function plus() {
    var args = [].slice.call(arguments);
    // console.log("plus", args)
    // console.log("plus", args.length)
    if(args.length > 0) {
        return "+" + args[0];
    } else {
        return "+";
    }
}
function minus() {
    var args = [].slice.call(arguments);
    // console.log("plus", args)
    // console.log("plus", args.length)
    if(args.length > 0) {
        return "-" + args[0];
    } else {
        return "-";
    }
}
function times() {
    var args = [].slice.call(arguments);
    // console.log("plus", args)
    // console.log("plus", args.length)
    if(args.length > 0) {
        return "*" + args[0];
    } else {
        return "*";
    }
}
function dividedBy() {
    var args = [].slice.call(arguments);
    // console.log("plus", args)
    // console.log("plus", args.length)
    if(args.length > 0) {
        return "/" + args[0];
    } else {
        return "/";
    }
}

console.log(two(times(nine())))