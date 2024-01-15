/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

function twoSum(nums, target){
    if(nums.length >(Math.pow(10,4)) || nums.length <(2)){return [0,0]}
    if(target >(Math.pow(10,9)) || target <(Math.pow(-10,9))){return [0,0]}
    // console.log(nums,target);
    const ans=[]
    for(let i = 0;i<nums.length;i++){
        // console.log(`current i index: ${i}`);
        if(nums[i] >(Math.pow(10,9)) || nums[i] <(Math.pow(-10,9))){return [0,0]}
        for(let j = i+1;j<nums.length;j++){
            // console.log(`current j index: ${j}`)
            // console.log(`nums[${i}](${nums[i]}) + nums[${j}](${nums[j]}) = ${nums[i]+nums[j]}`)
            if(nums[i]+nums[j]==target){
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    };
}

console.log(twoSum([2,5,5,11],10))