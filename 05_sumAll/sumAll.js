const sumAll = function(...sumThese) {
    let array = arguments;
    console.log(typeof(arguments))
    let sortedArgs = arguments.sort();
    for(i=sortedArgs[0]; i<=sortedArgs[1]; i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
