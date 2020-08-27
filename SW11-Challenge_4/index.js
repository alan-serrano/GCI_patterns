// -- Words Concatenation (hard) #
// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

// -- Example 1:
// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".

// -- Example 2:
// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".


// L = length of each word
// M = count of words
// N = length of the string
// Time Complexity O(NML)
// Space Complexity O(M+N)
function findWordConcatenation(str = '', words = []) {
    if(words.length === 0) return [];
    const wordLength = words[0].length;
    const wordsCount = words.length;
    const sizeWindow = wordsCount * wordLength;
    const result = [];
    const wordsFrecuency = words.reduce((acc, word)=> {
        acc[word] = acc[word] + 1 || 1;
        return acc;
    }, {});

    for( let start = 0; start <= str.length - sizeWindow; start++ ) {
        const wordsSeen = {};

        for(let j = 0; j < wordsCount; j++) {
            let startWordIndex = start + j * wordLength;

            const word = str.substr(startWordIndex, wordLength);

            if(!(word in wordsFrecuency)) {
                break;
            }

            wordsSeen[word] = wordsSeen[word] + 1 || 1;

            if(wordsSeen[word] > wordsFrecuency[word]) {
                break;
            }

            if(j + 1 === wordsCount) {
                result.push(start);
            }
        }
    }

    return result;
}

/* -------------------- */
/* Educative's Solution */
/* -------------------- */

// ‘N’ is the number of characters in the given string
// ‘M’ is the total number of words
// ‘Len’ is the length of a word.
// Time Complexity O(N∗M∗Len)
// Space Complexity O(M+N)

function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
        return [];
    }

    const wordFrequency = {};

    words.forEach((word) => {
        if (!(word in wordFrequency)) {
            wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
    });

    const resultIndices = [],
        wordsCount = words.length,
        wordLength = words[0].length;

    for (let i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
        const wordsSeen = {};
        for (let j = 0; j < wordsCount; j++) {
            const next_word_index = i + j * wordLength;
            // Get the next word from the string
            const word = str.substring(next_word_index, next_word_index + wordLength);
            if (!(word in wordFrequency)) { // Break if we don't need this word
                break;
            }

            // Add the word to the 'wordsSeen' map
            if (!(word in wordsSeen)) {
                wordsSeen[word] = 0;
            }
            wordsSeen[word] += 1;

            // no need to process further if the word has higher frequency than required
            if (wordsSeen[word] > (wordFrequency[word] || 0)) {
                break;
            }

            if (j + 1 === wordsCount) { // Store index if we have found all the words
                resultIndices.push(i);
            }
        }
    }

    return resultIndices;
}

export default {
    findWordConcatenation,
    find_word_concatenation
}