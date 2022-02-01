/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let reduceSum = (a, b) =>  a + b 
    let reduceProduct = (a, b) => a * b
    let myArray = n.toString().split("")
    let nArray = myArray.map( int => parseInt(int))
    console.log("nArray is",nArray)
    
    let answer = 0
    let productOfDigits = nArray.reduce(reduceProduct)
    let sumOfDigits = nArray.reduce(reduceSum)
    
    console.log("sumOfDigits is", sumOfDigits)
    
    answer = (productOfDigits - sumOfDigits)
    return answer
    
};