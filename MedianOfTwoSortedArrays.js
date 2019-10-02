/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length; // total length of two arrays
    let medianIndex = totalLength / 2;
    let count = 0;
    
    // iterate through arrays and pop off until hit median index
    while (count < medianIndex - 1) {
        if (nums1.length && nums2.length) {
            if (nums2[0] > nums1[0]) {
                nums1.shift();
            }
            else {
                nums2.shift();
            }
        }
        // pops off the first element of nums1
        else if (nums1.length) {
            nums1.shift();
        }
        // pops off the first element of nums2
        else nums2.shift();
        ++count;
    }
    
    if (totalLength % 2 === 1) {
        if (nums1.length && nums2.length) {
            if (nums2[0] > nums1[0]) {
                return nums1.shift();
            }
            else {
                return nums2.shift();
            }
        }
        // pops off the first element of nums1
        else if (nums1.length) {
            return nums1.shift();
        }
        // pops off the first element of nums2
        else return nums2.shift();
    }
    else {
        let sum = 0;
        for (let i = 0; i < 2; ++i) {
            if (nums1.length && nums2.length) {
                if (nums2[0] > nums1[0]) {
                    sum += nums1.shift();
                }
                else {
                    sum += nums2.shift();
                }
            }
            // pops off the first element of nums1
            else if (nums1.length) {
                sum += nums1.shift();
            }
            // pops off the first element of nums2
            else sum += nums2.shift();
        }
        return sum / 2;
    }
    
    
};