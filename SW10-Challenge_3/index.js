// Smallest Window containing Substring (hard) #
// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

// -- Example 1:
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

// -- Example 2:
// Input: String="abdabca", Pattern="abc"
// Output: "abc"
// Explanation: The smallest substring having all characters of the pattern is "abc".

// -- Example 3:
// Input: String="adcad", Pattern="abc"
// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.

function findSubstring(str, pattern) {
    let start = 0;
    let patterCount = createStrCounts(pattern);
    let diffCharPattern = Object.entries(patterCount).length
    let matches = 0;
    let minSubstr = {
        start,
        size: str.length + 1,
    };

    for(let end = 0; end < str.length; end ++) {
        const rightChar = str[end];

        if(rightChar in patterCount) {
            patterCount[rightChar]--;

            if(patterCount[rightChar] === 0) {
                matches++;
            }
        }

        while( matches === diffCharPattern) {
            const leftChar = str[start];

            if(end - start + 1 < minSubstr.size) {
                minSubstr = {
                    start,
                    size: end - start + 1,
                }
            }

            if(leftChar in patterCount) {
                if(patterCount[leftChar] === 0) {
                    matches--;
                }

                patterCount[leftChar]++;
            }

            start++;
        }
    }

    if(minSubstr.size > str.length) return '';

    return str.substring(minSubstr.start, minSubstr.start + minSubstr.size);
}

function createStrCounts(str) {
    const strCounts = {};

    for (const char of str) {
        strCounts[char] = strCounts[char] + 1 || 1;
    }

    return strCounts;
}

/* -------------------- */
/* Educative's Solution */
/* -------------------- */

function find_substring(str, pattern) {
    let windowStart = 0,
        matched = 0,
        substrStart = 0,
        minLength = str.length + 1,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] >= 0) { // Count every matching of a character
                matched += 1;
            }
        }

        // Shrink the window if we can, finish as soon as we remove a matched character
        while (matched === pattern.length) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }

            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                // Note that we could have redundant matching characters, therefore we'll decrement the
                // matched count only when a useful occurrence of a matched character is going out of the window
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }

    if (minLength > str.length) {
        return '';
    }

    return str.substring(substrStart, substrStart + minLength);
}


export default {
    findSubstring,
    find_substring
}