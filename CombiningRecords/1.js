/*
1) define success condition: 
    all duplicates are removed and best entry is optimized, proper formatting added
2) define/explore key phrases: 
    duplicates--> remove extraneous things that should be unique (what is unique? THE SSN)
    best entry optimized --> 
        must analyze/categorize diff name types and isolate information to know which names are first/last
            (if 2nd thing is a ',' then you know what came before was the lastName)
            (if no comma, then first is always firstName or firstInitial)
            (if no comma and length of nameEntry is 3, always is F-M-L )
                CREATE CONTRUCTOR FUNCTION THAT MAKES AN OBJECT WITH FIELDS AND KEEPS INDEX FOR ORDER
        final entry format should be F-L or F-M-L
    final output to sorted array from index object.join newline

    categorizeNames --> returns an object with

*/


function solution(input) {
    inputArray = input.split('\n');
    // console.log(inputArray)

    let ssnIndex = {}

    inputArray.forEach((entry, index) => {
        // console.log("SPLIT", entry.split(':')[1])
        let name = entry.split(':')[0]
        let ssn = entry.split(':')[1]
        // console.log("ssn", ssn)
        // console.log("name", name)
        
        if(!ssnIndex.hasOwnProperty(ssn)) {
            ssnIndex[ssn] = {
                index: index,
                fullNameObject: categorizeName(name)
            }
        } else {
            ssnIndex[ssn].fullNameObject = Object.assign({}, ssnIndex[ssn].fullNameObject, categorizeName(name))
        }
    })

    // console.log("ssnIndex", ssnIndex)
    /*
    for in loop through the index,
    orderOfPrecedence construct the optimal name
    push an object into the preOutputArray of {index, name}
    then were going to sort that array with a compare function on the index
    then we loop through that sorted array and push all NAMES to the output array
    then we're going to join them on \n
    */ 
    let preOutputArray = [];

    for (var ssnKey in ssnIndex) {
        // console.log("ssnKey", ssnKey)
        let fullNameObject = ssnIndex[ssnKey].fullNameObject
        let index = ssnIndex[ssnKey].index
        let optimalName;
        // console.log("fullNameObject:", fullNameObject)
        if(fullNameObject.hasOwnProperty('firstName') && fullNameObject.hasOwnProperty('middleName') && fullNameObject.hasOwnProperty('lastName')) {
            // console.log("I GOT FIRST AND MIDDLE")
            optimalName = fullNameObject.firstName + ' ' + fullNameObject.middleName + ' ' + fullNameObject.lastName;
            preOutputArray.push({ssn: ssnKey, name: optimalName, index: index})
        } else if(fullNameObject.hasOwnProperty('firstName') && fullNameObject.hasOwnProperty('middleInitial') && fullNameObject.hasOwnProperty('lastName')) {
            optimalName = fullNameObject.firstName + ' ' + fullNameObject.middleInitial + ' ' + fullNameObject.lastName;
            preOutputArray.push({ssn: ssnKey, name: optimalName, index: index});
        } else if(fullNameObject.hasOwnProperty('firstInitial') && fullNameObject.hasOwnProperty('middleInitial') && fullNameObject.hasOwnProperty('lastName')) {
            optimalName = fullNameObject.firstInitial + ' ' + fullNameObject.middleInitial + ' ' + fullNameObject.lastName;
            preOutputArray.push({ssn: ssnKey, name: optimalName, index: index});
        } else if(fullNameObject.hasOwnProperty('firstName') && fullNameObject.hasOwnProperty('lastName')) {
            optimalName = fullNameObject.firstName + ' ' + fullNameObject.lastName;
            preOutputArray.push({ssn: ssnKey, name: optimalName, index: index});
        } else if(fullNameObject.hasOwnProperty('firstName')) {
            optimalName = fullNameObject.firstName
            preOutputArray.push({ssn: ssnKey, name: optimalName, index: index});
        }
    }

    // console.log("preOutputArray", preOutputArray)
    preOutputArray.sort((a, b) => {
        return a.index - b.index;
    })
    // console.log("preOutputArray SORT", preOutputArray)
    let outputArray = preOutputArray.map((x) => {
        return `${x.name}:${x.ssn}`
    })
    // console.log("outputArray outputArray", outputArray)

    return outputArray.join('\n');
    



}


function categorizeName(input) {
    let nameArray;
    let outputObject = {};

    if(input.indexOf(',') > -1) {
        let lastNameArray = input.split(',');
        outputObject.lastName = lastNameArray[0];
        let everythingElse = lastNameArray[1].split(' ')
        // console.log("everythingElse: ", everythingElse)
        if(everythingElse.length > 1) {
            outputObject.firstName = everythingElse[0]
            outputObject.middleName = everythingElse[1]
        } else {
            outputObject.firstName = everythingElse[0]
        }
    } else {
        nameArray = input.split(' ');
        // console.log("nameArray", nameArray)
        // console.log("nameArray LEN", nameArray.length)
        if(nameArray.length === 1) {
            outputObject.firstName = nameArray[0]
        } else if(nameArray.length === 2) {
            outputObject.firstName = nameArray[0]
            outputObject.lastName = nameArray[1]
        } else if(nameArray.length === 3) {
            // console.log("HERE")
            outputObject.lastName = nameArray[2]
            nameArray.forEach((name, index) => {
                if(index === 0) {
                    if(name.length > 1) {
                        outputObject.firstName = name;
                    } else {
                        outputObject.firstInitial = name;
                    }
                } else if(index === 1) {
                    if(name.length > 1) {
                        outputObject.middleName = name;
                    } else {
                        outputObject.middleInitial = name;
                    }
                }
            })
        }
        

    }
    // console.log("outputObject", outputObject)
    return outputObject;
}

// categorizeName('S T Bear')
data = 'Sam:111111111\n'+
'Green,Sam:111111111\n'+
'Sam Green:111111111\n'+
'Charlie:999999999\n'+
'S T Bear:555555555\n'+
'Green,Sam Reed:111111111\n'+
'Smokey:555555555\n'+
'Sam Reed Green:111111111';

console.log(solution(data));
