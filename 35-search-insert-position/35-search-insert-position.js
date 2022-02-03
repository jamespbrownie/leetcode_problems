/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if (target > nums[nums.length -1]) {
        return answer = nums.length
    }
    

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        if (nums[i] >= target) {
            return answer = i
        }
        
    }
    
    return answer
};