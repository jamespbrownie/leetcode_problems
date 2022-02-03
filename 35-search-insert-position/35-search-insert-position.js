/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let answer = 0

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        if (nums[i] >= target) {
            return answer = i
        }
        
    }
    if (answer == 0) {
        return answer = nums.length
    }
    return answer
};