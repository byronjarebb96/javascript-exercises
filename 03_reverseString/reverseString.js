const reverseString = function(string) {
    stringArray=[]
    for (i = 0; i < string.length; i++)
    {
        stringArray.push(string.substring(i,i+1))
    } 
    let output = stringArray.reverse();
    return output.join("");
}
// Do not edit below this line
module.exports = reverseString;
