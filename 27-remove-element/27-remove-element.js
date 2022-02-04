/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    for (let i = 0; i < nums.length; i++) {
        console.log("i is", i)
        if (nums[i] == val) {
            console.log("deleting", nums[i])
            nums.splice(i, 1)
            i--
        }
        //nums = answer
    }

    console.log("nums is",nums)

};