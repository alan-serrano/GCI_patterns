// --- Problem Statement #
// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// --- Example 1:
// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

// --- Example 2:
// Input: [2, 1, 5, 2, 8], S=7 
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

// --- Example 3:
// Input: [3, 4, 1, 1, 6], S=8 
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

// Time Complexity O(n)
// Space Complexity O(1)
function smallest_sub_array_with_given_sum(s, arr) {
    let start = 0;
    let end = 0;
    let sum = arr[0];
    let smallestLength;

    while( end < arr.length ) {
        if(sum < s) {
            sum += arr[++end];
        } else {
            smallestLength = Math.min(smallestLength, end - start + 1) || end - start + 1;
            sum = sum - arr[start++]
        }
    }

    return smallestLength || 0;
}

// Time Complexity O(n)
// Space Complexity O(1)
function smallest_sub_array_with_given_sum2(s, arr) {
    let start = 0;
    let sum = 0;
    let smallestLength;

    for(let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while(sum >= s) {
            smallestLength = Math.min(smallestLength, end - start + 1) || end - start + 1;
            sum -= arr[start++];
        }
    }

    return smallestLength || 0;
}

export default {
    smallest_sub_array_with_given_sum,
    smallest_sub_array_with_given_sum2
};