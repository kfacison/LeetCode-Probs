/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).


Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= nums1[i], nums2[i] <= 10^6
*/

function medianSortedArrays(nums1,nums2){
    let median;
    const numsCombined=nums1.concat(nums2);
    //Heap sort
    function compareNumbers(a, b) {
        return a - b;
    }
    numsCombined.sort(compareNumbers);

    if(numsCombined.length%2===0){
        median=((numsCombined[(numsCombined.length/2)-1])+(numsCombined[(numsCombined.length/2)]))/2;
    }
    else{
        median=numsCombined[Math.ceil(numsCombined.length/2)-1];
    }
    // console.log(numsCombined);
    return median;
}

console.log(medianSortedArrays([3], [-1,-2]));
console.log(medianSortedArrays([1,3], [2,7]));