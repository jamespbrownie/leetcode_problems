/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let myObj = {}
    let answer = 0
    
    for (let char of stones) {
        if(jewels.includes(char)) {
            answer++
        }
    }
    return answer 
}