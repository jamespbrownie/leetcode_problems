/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let answer = []
    //loop though array
    for (let i = 0; i < nums.length; i++) {
        let theNumber = 0
        nums.map(num => { if (nums[i] > num) theNumber++})
        answer.push(theNumber)
    }
    return answer
};