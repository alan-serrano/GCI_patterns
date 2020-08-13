// Problem Statement #
// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

// Example 1:
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

// Example 2:
// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

// Example 3:
// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

function lengthOfLongestSubstring(str, k) {
    let windowStart  = 0;
    const charCounts = {};
    let maxLength = 0;
    let maxCount = 0; // The Maximum frequency of a character in the window when maxLength is getted

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        charCounts[rightChar] = charCounts[rightChar] + 1 || 1;
        maxCount = Math.max(maxCount, charCounts[rightChar]);

        if( windowEnd - windowStart + 1 - maxCount > k ) {
            const leftChar = str[windowStart];
            charCounts[leftChar]--;
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;

}

// Educative's Solution
function length_of_longest_substring(str, k) {
    let windowStart = 0,
        maxLength = 0,
        maxRepeatLetterCount = 0,
        frequencyMap = {};

    // Try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in frequencyMap)) {
            frequencyMap[rightChar] = 0;
        }
        frequencyMap[rightChar] += 1;
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

        // Current window size is from windowStart to windowEnd, overall we have a letter which is
        // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
        // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
        // if the remaining letters are more than 'k', it is the time to shrink the window as we
        // are not allowed to replace more than 'k' letters
        if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
            const leftChar = str[windowStart];
            frequencyMap[leftChar] -= 1;
            windowStart += 1;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

export default {
    lengthOfLongestSubstring,
    length_of_longest_substring
};