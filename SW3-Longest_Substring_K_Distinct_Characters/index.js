// Problem Statement #
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// --- Example 1:
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// --- Example 2:
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// --- Example 3:
// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest subcharCounts with no more than '3' distinct characters are "cbbeb" & "bbebi".

// OICE
// O: Length of the longest substring with k distinct characters
// I: Array and a K value
// E: string is empty, string has less characters than K
// C: 

// Time Complexity O(n)
// Space Complexity O(k)
function findLength(str, k = 1) {
    if(k <= 0) return;

    let start = 0;
    let charCount = {};
    let maxLength = 0;
    let currentK = 0;

    for(let end = 0; end < str.length; end++) {
        let rightChar = str[end];
        let leftChar = str[start];

        if( !(rightChar in charCount) ) {
            currentK++;
            charCount[rightChar] = 0;
        }

        charCount[rightChar]++;

        while(currentK > k) {
            charCount[leftChar]--;

            if( charCount[leftChar] === 0 ) {
                delete charCount[leftChar];
                currentK--;
            }

            leftChar = str[++start];
        }

        if( currentK === k ) {
            maxLength = Math.max(maxLength, end - start + 1);
        }

    }

    return maxLength;
}

export default {
    findLength
}