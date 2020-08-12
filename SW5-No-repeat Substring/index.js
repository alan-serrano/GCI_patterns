// Problem Statement #
// Given a string, find the length of the longest substring which has no repeating characters.

// -- Example 1:
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".

// -- Example 2:
// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".

// -- Example 3:
// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

function findLength(str) {
    let maxK = 0;
    let start = 0;
    const strPosition = {};

    for(let end = 0; end < str.length; end++) {
        const rightChar = str[end];

        if(strPosition[rightChar] !== undefined && strPosition[rightChar] >= start) {
            start = strPosition[rightChar] + 1;
        }
        
        maxK = Math.max(maxK, end - start + 1);
        strPosition[rightChar] = end;
    }

    return maxK;
}

export default findLength;