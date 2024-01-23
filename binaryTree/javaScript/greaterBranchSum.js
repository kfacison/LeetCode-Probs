/*
Given a binary tree represented as an array, for example, arr = [3,6,2,9,-1,10] represents a binary tree and -1 is a non existent node. 

Write a function that determines whether the left or right branch of the ree is larger. The size of each branch is the sum of the node values.
The function should return the string "Right" if the right size is larger and "Left" if the left size is larger.
If the tree has 0 nodes of it the size of the branches are equal, return the empty string.


Example 1:
Input: arr = [3,6,2,9,-1,10]
Output: "Left"
Explanation: The left sum of 6+9=15 is greater than the right sum of 2+10=12.

Example 2:
Input: arr = [1,10,5,1,0,6]
Output: ""

*/

function branchTree(arr){
    let leftSum = 0;
    let rightSum = 0;
    let currentIdx = 1;
    let consecutive = 1;
    while(currentIdx<arr.length){
        for(let i = currentIdx; i<(consecutive+currentIdx) && i<arr.length;i++){
        if(arr[i]!==-1){
            leftSum += arr[i];
            }
        }
        currentIdx += consecutive;
        if(currentIdx>arr.length){break;}

        for(let j = currentIdx;j<(consecutive+currentIdx)&& j<arr.length;j++){
            if(arr[j]!==-1){
            rightSum += arr[j];
            }
        }
        currentIdx += consecutive;
        if(currentIdx>arr.length){break;}
        consecutive *= 2;
    }

    if(leftSum>rightSum){
        return "Left"
    }
    else if(rightSum>leftSum){
        return "Right"
    }
    else{
        return ""
    }
}

console.log(branchTree([3,6,2,9,-1,10]))//"Left"
console.log(branchTree([1, 4, 100, 5]))//"Right"
console.log(branchTree([1,10,5,1,0,6]))//""