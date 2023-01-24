
/** 
 
=> Problem Link: https://leetcode.com/problems/concatenation-of-array/
=> Difficulty: Easy

 **/



var getConcatenation = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
    }
    
    console.log(result);
};

