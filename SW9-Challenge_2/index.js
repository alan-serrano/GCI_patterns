// -- String Anagrams (hard) #
// Given a string and a pattern, find all anagrams of the pattern in the given string.
// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

// abc
// acb
// bac
// bca
// cab
// cba

// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// -- Example 1:
// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

// -- Example 2:
// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

/* Conditions of an anagram  */
// Same length
// Same characters

// If N is the size of the string and N the size of the pattern
// Time Complexiy O(N + M)
// Space Complexity O(M) only if a don't take in count the result list, if so, I need additional O(n) space for the result
function findStringAnagrams(str, pattern) {
    const patternCounts = createStringCounts(pattern);
    let start = 0;
    let matches = 0;
    const diffCharPattern = Object.keys(patternCounts).length;
    const listIndexAnagrams = [];

    for(let end = 0; end < str.length; end++) {
        const rightChar = str[end];
        const leftChar = str[start];

        if(rightChar in patternCounts) {
            if(--patternCounts[rightChar] === 0 ) {
                matches++;
            }
        }

        if(matches === diffCharPattern) {
            listIndexAnagrams.push(start);
        }

        if( end >= pattern.length - 1 ) {

            if(leftChar in patternCounts) {
                if(patternCounts[leftChar]++ === 0) {
                    matches--;
                }
            }
            start++;
        }
    }

    return listIndexAnagrams;
}

function createStringCounts(str) {
    const stringCounts = {};

    for(const letter of str) {
        stringCounts[letter] = stringCounts[letter] + 1 || 1;
    }

    return stringCounts;
}


/* -------------------- */
/* Educative's Solution */
/* -------------------- */

function find_string_anagrams(str, pattern) {
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

    const resultIndices = [];
    // our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
            resultIndices.push(windowStart);
        }

        // shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            const leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1; // before putting the character back, decrement the matched count
                }
                charFrequency[leftChar] += 1; // put the character back
            }
        }
    }

    return resultIndices;
}

export default {
    findStringAnagrams,
    find_string_anagrams
}
