/**
Objective:
Write a function that takes a binary string as input and replaces all occurrences of the digit 0 with the digit 1.

Requirements:
The input will be a string consisting only of 0s and 1s (a binary string).
The output should be a binary string where all 0s have been replaced by 1s, while preserving the order of the digits.

Input:
"100101"

Output:
"111111"

Constraints:
Input will always be a valid binary string (containing only 0 and 1).
Ensure the function handles both empty strings and larger strings efficiently.
*/

const replaceZerosWithOnes = (binaryString: string): string => {
    if (binaryString.length === 0) return binaryString;

    // SOLUTION 1
    /*
    const binaryArray = binaryString.split("");
    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === "0") {
            binaryArray[i] = "1";
        }
    }

    return binaryArray.join("");
    */

    // SOLUTION 2
    return binaryString.replace(/0/g, "1");
};

console.log(replaceZerosWithOnes("100101")); // 111111
console.log(replaceZerosWithOnes("000")); // "111"
console.log(replaceZerosWithOnes("111")); // "111"
console.log(replaceZerosWithOnes(""));
