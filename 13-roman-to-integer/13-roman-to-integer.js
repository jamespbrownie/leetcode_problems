/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let theAnswer = 0
    let subtractions = [ "IV", "IX", "XL", "XC", "CD", "CM" ]
    let integers = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000, "IV":4, "IX":9, "XL":40, "XC":90, "CD":400, "CM":900}
    let myArr = s.split("") 
    
    //first loop through to find subtractions
    for (let i = 0; i < myArr.length; i++) {
        //console.log("myArr is", myArr)
        console.log("current iteration is", myArr[i] + myArr[i+1])
        if (subtractions.includes(myArr[i] + myArr[i+1])) {
            let subtraction = myArr.splice([i], 2).join("")
            console.log("subtraction is", subtraction)
            //console.log("subtraction's value is", integers[subtraction])
            theAnswer = theAnswer + integers[subtraction]
            i = i-2 //because of the splicing, place is lost and need to go back
        }
        //console.log("the answer is currently", theAnswer)
        
    }
    //if statement to avoid final loop if the integer is only subtractions
    if (myArr.length == 0) {
        return theAnswer
    }
    
    
    console.log("myArr after subtractions is", myArr)
    //for the elements in myArr, convert them to object values
    
    for (element of myArr) {
        theAnswer = theAnswer + integers[element]
    }
    console.log("theAnswer is", theAnswer)
    
    return theAnswer

};





//     let ans = 0
//     console.log(s)
//     let myArr = s.split("")
//     console.log(myArr)
//     let subtractOne = ["V", "X"]
//     let subtractTen = ["L", "C"]
//     let subtractHundo = ["D", "M"]
    
//     for (let i = 0; i < myArr.length; i++) {
//         if (myArr[i] == "I") {
//             subtractOne.includes(myArr[i+1])  ? null : ans++
//             myArr[i+1] == "V"  ? (ans = ans + 4),  : ans++
//             console.log (ans)
//         } 
        
//         console.log("ans is" ,ans)
        
//     }
//     return ans