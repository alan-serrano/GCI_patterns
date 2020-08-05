// --- Problem Statement #
// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

// --- Example 1:
// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// --- Example 2:
// Input: [2, 3, 4, 1, 5], k=2 
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

function max_sub_array_of_size_k(k, arr) {
    if( arr.length < k ) return false;

    let start = 0;
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    
    for(let end = 0; end < arr.length; end++) {
        sum += arr[end];

        if( end >= k - 1 ) {
            maxSum = Math.max(maxSum, sum);
            sum -= arr[start++];
        }
    }

    return maxSum;
}

function max_sub_array_of_size_k_2(k, arr) {
    if( arr.length < k ) return false;

    let start = 0;
    let end = 0;
    let sum = 0;
    let maxSum = 0;

    // First Window
    while( end < k ) {
        sum += arr[end++];
    }

    maxSum = sum;

    while( end < arr.length ) {
        sum += arr[end++] - arr[start++];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

export default {
    max_sub_array_of_size_k,
    max_sub_array_of_size_k_2,
};