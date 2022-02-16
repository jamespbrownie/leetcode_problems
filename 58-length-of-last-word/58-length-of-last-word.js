/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    function isWord (word) {
        return word.length >= 1
    }
    
    let myArray = s.split(" ")
    console.log(myArray)
    let finalArray = myArray.filter(isWord)
    console.log("finalArray is",finalArray)
    return finalArray[finalArray.length -1].length
};