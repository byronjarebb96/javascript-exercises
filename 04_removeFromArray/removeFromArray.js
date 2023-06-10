const removeFromArray = function(array, removeThis) {
    if (removeThis > 1)
    {
        removalIndex = array.indexOf(removeThis);
        array.splice(removalIndex, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
