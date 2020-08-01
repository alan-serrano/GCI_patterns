// ----Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

// ----Example 1:

// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// -----Example 2:

// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].

// -----OICE
// O: sorted integer array with non duplicate values
// I: sorted integer array
// C: O(1) Space
//    in place
// E: Empty array

// Time complexity O(n)
// Space complexity O(n)
function remove_duplicates_1(arr) {
    return [...new Set(arr)];
}


// Time complexity O(n)
// Space Complexity O(1)
function remove_duplicates_2(arr) {
    let lndv = 0; // Last Non Duplicate value

    if( arr.length === 0 ) return [];
    
    for(let i = 1; i < arr.length; i++) {
        if( arr[lndv] !== arr[i] ) {
            arr[lndv+1] = arr[i]
            lndv++;
        }
    }

    arr.length = lndv + 1;

    return arr;
}


// Time complexity O(n)
// Space Complexity O(1)
function remove_duplicates_educative(arr) {
    let nextNonDuplicate = 1;

    if( arr.length === 0 ) return [];
    
    for(let i = 1; i < arr.length; i++) {
        if( arr[nextNonDuplicate - 1] !== arr[i] ) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate++;
        }
    }

    arr.length = nextNonDuplicate;

    return arr;
}

module.exports = {
    remove_duplicates_1,
    remove_duplicates_2,
    remove_duplicates_educative
};
