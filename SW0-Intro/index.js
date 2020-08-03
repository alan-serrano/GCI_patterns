// --- Example 1
// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Let’s understand this problem with a real input:
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:

// For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6-1)/5 => 2.2(1+3+2+6−1)/5=>2.2
// The average of next 5 numbers (subarray from index 1-5) is: (3+2+6-1+4)/5 => 2.8(3+2+6−1+4)/5=>2.8
// For the next 5 numbers (subarray from index 2-6), the average is: (2+6-1+4+1)/5 => 2.4(2+6−1+4+1)/5=>2.4
// …
// Here is the final output containing the averages of all contiguous subarrays of size 5:
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

function findAverageOfSubarrays(k, arr) {
    if(arr.length < k) return [];

    let start = 0;
    let end = 0;
    let sum = 0;
    const averages = [];

    // First window
    while(end < k) {
        sum += arr[end++];
    }

    averages.push(sum / k)

    while( end < arr.length ) {
        sum += arr[end++]- arr[start++];
        averages.push(sum / k)
    }

    return averages;
}

function findAverageOfSubarrays_2(k, arr) {
    if(arr.length < k) return [];

    let start = 0;
    let sum = 0;
    const averages = [];

    for(let end = 0; end < arr.length; end++) {
        sum += arr[end];

        if(end >= k - 1) {
            averages.push(sum / k);
            sum -= arr[start++];
        }
    }

    return averages;
}

module.exports.tests = {
    findAverageOfSubarrays,
    findAverageOfSubarrays_2
};