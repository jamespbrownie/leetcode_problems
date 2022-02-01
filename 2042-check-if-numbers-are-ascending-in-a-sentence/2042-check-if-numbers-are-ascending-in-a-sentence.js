/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    //console.log(s)
    
    let sentance = s.split(" ")
    let prevNumber = 0
    for (const word of sentance) {
        console.log("current word is", word)
        if (!isNaN(word)) {
           console.log("number is", word)
            if (parseInt(prevNumber) >= parseInt(word)) {
                console.log(`${prevNumber} is greater than ${word}`)
                return false
            } else { console.log("else") }
            //console.log("word and the number are", word, theNumber)
            
            prevNumber = word
        console.log("prevNumber is now", prevNumber)
        } else { console.log("else")}
        
    } 
    return true
    
};