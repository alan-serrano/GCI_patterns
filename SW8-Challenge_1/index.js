// -- Permutation in a String (hard) #
// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba

// If a string has ‘n’ distinct characters it will have n!n! permutations.


// -- Example 1:
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

// -- Example 2:
// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.

// -- Example 3:
// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.

// -- Example 4:
// Input: String="aaacb", Pattern="abc" nk
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.

// OIEC
// O: Boolean
// I: Strin, Pattern
// E:
// C:

// Time Complexity O(NM) where N is the size of str, and M is the size of pattern
// Space Complexity O(M)
function stringPermutation(str, pattern) {
    const strCounts = {};
    let start = 0;
    const patternCounts = createCharCount(pattern);

    for(let end = 0; end < str.length; end++) {
        const rightChar = str[end].toLowerCase();
        const leftChar = str[start].toLowerCase();
        
        strCounts[rightChar] = strCounts[rightChar] + 1 || 1;

        if( end >= pattern.length - 1 ) {

            if(checkPermutation(strCounts, patternCounts)) return true;

            strCounts[leftChar]--;
            start++;

            if(strCounts[leftChar] === 0) {
                delete strCounts[leftChar];
            }
        }
    }

    return false;
}

function createCharCount(str) {
    const charCounts = {};

    for (const char of str.toLowerCase()) {
        charCounts[char] = charCounts[char] + 1 || 1;
    }

    return charCounts;
}

function checkPermutation(obj1, obj2) {
    // Check Obj1
    for(const key in obj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if(value1 !== value2) return false;
    }
    
    // Check Obj2
    for(const key in obj2) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if(value1 !== value2) return false;
    }

    return true;
}

// Time Complexity O(N+M)
// Space Complexity O(M)
function stringPermutation1(str, pattern) {
    let matches = 0;
    let start = 0;
    let strCountsPattern = createCharCount(pattern);
    let patternCharacters = Object.keys(strCountsPattern).length;

    for(let end = 0; end < str.length; end++) {
        const rightChar = str[end];
        const leftChar = str[start];

        if(rightChar in strCountsPattern) {
            strCountsPattern[rightChar]--;
            
            if(strCountsPattern[rightChar] === 0) {
                matches++;
            }
        }

        if( matches === patternCharacters ) {
            return true;
        }

        if( end >= pattern.length - 1 ) {
            
            if(strCountsPattern[leftChar] === 0) {
                matches--;
            }

            strCountsPattern[leftChar]++;
            start++;
        }
    }

    return false;
}

/* -------------------- */
/* Educative's Solution */
/* -------------------- */

function find_permutation(str, pattern) {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // Decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) {
            return true;
        }

        // Shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }

    return false;
}

export default {
    stringPermutation,
    stringPermutation1,
    find_permutation,
};