'''
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
'''

def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
    merged = []
    i, j = 0, 0
    
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            merged.append(nums1[i])
            i += 1
        else:
            merged.append(nums2[j])
            j += 1
            
    while i < len(nums1):
        merged.append(nums1[i])
        i += 1
        
    while j < len(nums2):
        merged.append(nums2[j])
        j += 1
    
    mid = len(merged) // 2
    if len(merged) % 2 == 0:
        return (merged[mid-1] + merged[mid]) / 2
    else:
        return merged[mid]

print(findMedianSortedArrays([1,3],[2]))
print(findMedianSortedArrays([1,2],[3,4]))
print(findMedianSortedArrays([1,3],[7,8]))
