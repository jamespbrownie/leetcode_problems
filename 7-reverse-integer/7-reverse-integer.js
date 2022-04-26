/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = []
    let number = x.toString()
    console.log("number is",number)
    for(let i=0; i < number.length; i++){
        number[i]=='-'? null: answer.unshift(number[i])   
    }
    console.log("x is ", x, "number is", number)
    console.log("answer is", answer)
    if ( parseInt(answer.join('')) > 2147483647 || parseInt(answer.join(''))*-1< -2147483648 ) {
        return 0
    }
    if (x>0){
    return answer.join('')
    }else if (x<0){
        console.log("negative is ", parseInt(answer.join(''))*-1)
        return parseInt(answer.join(''))*-1
    }else if (x==0){
        console.log("unexpected test case")
        return 0;
    } else {
        console.log("unexpected")
    }
};