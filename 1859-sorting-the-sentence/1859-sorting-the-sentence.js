/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let myArr = s.split(" ")
    console.log(myArr)
    myArr.sort( (a, b) => {
        if (a[a.length -1] > b[b.length -1]) {
            return 1
        } else {
            return -1
        }
        
    })
    console.log(myArr)
    let newArr = []
    myArr.map( word => {
        //word = word.slice(word.length -1, 1)
        newArr.push(word.slice(0, word.length -1))
    })
  return newArr.join(" ")
};