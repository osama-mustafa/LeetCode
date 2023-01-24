
/** 
 
=> Problem Link: https://leetcode.com/problems/running-sum-of-1d-array/
=> Difficulty: Easy

 **/


var runningSum = function(nums) {
    let sum = 0; 
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + sum;
        result.push(sum);
    }
    return result;
};

