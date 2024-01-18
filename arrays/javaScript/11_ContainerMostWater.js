/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 10^5
0 <= height[i] <= 10^4
*/

function maxArea(height){
    if(height.length >(Math.pow(10,5)) || height.length <(2)){return }
    let max =0;
    let temp =0;
    for(let i=0;i<height.length;i++){
        for(let j =i+1;j<height.length;j++){
            if(height[i]<=height[j]){
                temp = height[i]*(j-i)
            }
            else{
                temp = height[j]*(j-i)
            }
        if(temp>max){
            max = temp;
        }
        }
    }
    return max;
}

function maxArea2(height){
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        let width = right - left;
        
        let h = Math.min(height[left], height[right]);
        
        let water = width * h;
        
        maxWater = Math.max(maxWater, water);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}

// code works but is not optimal

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea2([1,8,6,2,5,4,8,3,7]))