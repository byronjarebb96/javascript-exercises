const removeFromArray = function(array, ...removeThese) {
    for (removalItem of removeThese)
    {
        if (array.includes(removalItem)==1)
        {
            removalIndex = array.indexOf(removalItem);
            array.splice(removalIndex,1);
        }
    }
    return array;
    /*
    if (removeThis > 1)
    {
        removalIndex = array.indexOf(removeThis);
        array.splice(removalIndex, 1);
    }
    return array;
    */
};

// Do not edit below this line
module.exports = removeFromArray;
