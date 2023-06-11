const sumAll = function(...sumThese) {
    for (item of sumThese)
    {
        if (item < 0 || !Number.isInteger(item))
        {
            return ('ERROR');
        }
    }
    sumThese.sort(compareNumbers);    // Sorts the two numbers in ascending order
    let sum = 0;     // Initalize integer for variable
    for(i=sumThese[0]; i<=sumThese[1]; i++)    // Add all numbers between sumThese
    {
        if (i < 0 && !Number.isInteger(i))
        sum+=i;
    }
    return sum;
};

function compareNumbers(a, b)
{
    return (a-b);
}


// Do not edit below this line
module.exports = sumAll;
