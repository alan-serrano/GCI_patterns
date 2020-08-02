// --- Problem Statement #
// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

// --- Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

// --- OICE
// O: sorted array with square numbers:
// I: Sorted Array
// C:
// E: Array with negative and positive numbers

// Time Complexity O(n)
// Space Complexity O(n)
function make_squares(arr) {
    let left = 0;
    let right = arr.length - 1;
    const result = new Array(arr.length);

    for(let i = arr.length - 1; i >= 0; i--) {
        leftSquare = arr[left]**2;
        rightSquare = arr[right]**2;

        if( leftSquare > rightSquare ) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }

    return result;
}

// Time Complexity O(n)
// Space Complexity O(n)
function make_squares_educative(arr) {
    const n = arr.length;
    const squares = Array(n).fill(0);

    let highestSquareIdx = n - 1;
    let left = 0,
        right = n - 1;

    while(left <= right) {
        let leftSquare = arr[left] * arr[left],
            rightSquare = arr[right] * arr[right];
        
        if( leftSquare > rightSquare ) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }

        highestSquareIdx -= 1;
    }

    return squares;
}

module.exports = {
    make_squares,
    make_squares_educative
}
