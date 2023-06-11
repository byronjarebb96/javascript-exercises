const removeFromArray = function(array, ...remove) {
    remove.forEach(element => {
        if (remove > 1)
        {
            removeElements = array.indexOf(remove);
            array.splice(removeElements,1);
        }
    })
    return array
        /*
    });

    if (elements > -1)
    {
        removeElements = array.indexOf(elements);
        array.splice(removeElements,1);
        return array
    }*/
}  

// Do not edit below this line
module.exports = removeFromArray;
