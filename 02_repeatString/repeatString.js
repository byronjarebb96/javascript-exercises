const repeatString = function(string, num) 
{
    let repString = ""
    if (num < 0)
    {
        return 'ERROR'
    }
    for (i=0; i < num; i++)
    {
        repString = repString + string;
    }
    return repString;
};

// Do not edit below this line
module.exports = repeatString;
