/*
Complete the method so that it does the following:

Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
*/

function stripUrlParams(url, paramsToStrip){

  var urlString;
  var queryString;
  var queryArray;

  var urlReg = /www.+.com/g;
  var queryReg = /\?.+/;

  urlString = urlReg.exec(url)[0]   //because .exec() returns an array of all found instances
  queryString = queryReg.exec(url)
  if(queryString === null){         //if there is no queryString, break out and return the url
    return urlString;
  } else {
    queryString = queryReg.exec(url)[0]
  }
  queryString = queryString.replace(/^\?/, "");     //take out the "?"

  queryArray = queryString.split("&");              //separate queries on their "?"

  var justBegArray = queryArray.map((item) => {     //only gives you the "a" from "a=2"
    return item[0];
  })

  var queryIndex = {}                               //makes a query index {a: "a=1"}
  for (var i = 0; i < queryArray.length; i++) {
    if(!queryIndex.hasOwnProperty(justBegArray[i])){
      queryIndex[justBegArray[i]] = queryArray[i]
    }
  }

  var finalQueryArray = [];

  var optionArray = arguments[1]

  if(optionArray){                                  //if there is an optional array
                                                    //loop through the index object and ONLY TAKE
    for (var variable in queryIndex) {              //properties whose variables do not appear in the optionArr
      if(optionArray.indexOf(variable) == -1){

        finalQueryArray.push(queryIndex[variable]);
      }
    }

  } else {
    for (var variable in queryIndex) {
      finalQueryArray.push(queryIndex[variable]);
    }
  }

  var finalQueryString = finalQueryArray.join('&')

  var answer = urlString + "?" + finalQueryString

  return answer
}

// var answer = stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// var answer = stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// var answer = stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
var answer = stripUrlParams('www.codewars.com?a=1&b=2') //

console.log(answer);
























//d
