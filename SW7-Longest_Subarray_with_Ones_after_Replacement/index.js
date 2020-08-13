// -- Longest Subarray with Ones after Replacement (hard)

// -- Problem Statement #
// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

// Example 1:
// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// Example 2:
// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

// Time Complexity O(n)
// Space Complexity 0(1)
function longestSubArrayWithOnes(arr, k) {
    let windowSum = 0;
    let maxCountOfOnes = 0; // Max count of ones when maxLength is getted;
    let maxLength = 0;
    let start = 0;

    for( let end = 0; end < arr.length; end ++) {
        const rightNumber = arr[end];
        windowSum += rightNumber;
        maxCountOfOnes = Math.max(maxCountOfOnes, windowSum);

        if( end - start + 1 -  maxCountOfOnes > k) {
            const leftNumber = arr[start];
            windowSum -= leftNumber;
            start++;
        }

        maxLength = Math.max(maxLength, end-start+1);
    }

    return maxLength
}

// Educative Solution
function length_of_longest_substring(arr, k) {
    let windowStart = 0,
        maxLength = 0,
        maxOnesCount = 0;

    // Try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if (arr[windowEnd] === 1) {
            maxOnesCount += 1;
        }

        // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
        // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
        // and the remaining are 0s which should replace with 1s.
        // now, if the remaining 1s are more than 'k', it is the time to shrink the window as we
        // are not allowed to replace more than 'k' 0s
        if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
            if (arr[windowStart] === 1) {
                maxOnesCount -= 1;
            }
            windowStart += 1;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

    }

    return maxLength;
}

export default {
    longestSubArrayWithOnes,
    length_of_longest_substring
};