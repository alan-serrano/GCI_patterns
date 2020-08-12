// Fruits into Baskets (medium)
// -- Problem Statement #
// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both the baskets.

// -- Example 1:
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// -- Example 2:
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

// OIEC
// O: number
// I: array
// E: None
// C: 2 different characters, case insensitive

function fruitsIntoBaskets(fruits) {
    let start = 0;
    let maxCountFruits = 0;
    let baskets = {};
    let count = 0; // current count of different characters in baskets

    for(let end = 0; end < fruits.length; end++) {
        const rightFruit = fruits[end];

        if( !(rightFruit in baskets) ) {
            count++;
            baskets[rightFruit] = 0;
        }

        baskets[rightFruit]++;

        while( count > 2 ) {
            const leftFruit = fruits[start];
            baskets[leftFruit]--;

            if(baskets[leftFruit] === 0) {
                count--;
                delete baskets[leftFruit];
            }

            start++;
        }

        maxCountFruits = Math.max(maxCountFruits, end - start + 1);
    }

    return maxCountFruits;
}

export default {fruitsIntoBaskets};