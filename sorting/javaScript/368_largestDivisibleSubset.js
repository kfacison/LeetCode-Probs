/*
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.


Example 1:
Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.

Example 2:
Input: nums = [1,2,4,8]
Output: [1,2,4,8]


Constraints:
1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 10^9
All the integers in nums are unique.
*/

function largestDivisibleSubset(nums){
    const answer = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]%nums[j]==0 || nums[j]%nums[i]==0){
                // console.log(`j= ${j} and i= ${i}`)
                // console.log(`nums[i]=${nums[i]} and nums[j]=${nums[j]} are being pushed`)
                answer.push(nums[i],nums[j]);
                break;
            }
        }
        if(answer.length>0){
            break;
        }
        else if(nums.length==1){
            return nums;
        }    
    }
    if(answer.length==0){
        answer.push(nums[0]);
        return answer;
    }
    let isFactor = false;
    for(let k=0;k<nums.length;k++){
        for(let j=0;j<answer.length;j++){
            if(answer[j]==nums[k]){
                isFactor=false;
                break;
            }
            if(answer[j]%nums[k]==0 || nums[k]%answer[j]==0){
                // console.log(`j= ${j} and answer[j]=${answer[j]}, k=${k} and nums[k]=${nums[k]}`);
                isFactor=true;
            }
            else{
                isFactor=false;
                break;
            }
        }
        if(isFactor){
            // console.log(`nums[k]=${nums[k]} and is being pushed`)
            answer.push(nums[k]);
        }
    }
    return answer;
}

console.log(largestDivisibleSubset([1,2,3]))
//[1,2] or [1,3]

console.log(largestDivisibleSubset([1,2,4,8]))

console.log(largestDivisibleSubset([3,17]))

console.log(largestDivisibleSubset([3,4,16,8]))

console.log(largestDivisibleSubset([2,3,8,9,27]))