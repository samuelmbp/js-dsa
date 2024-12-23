/**
 * Objective:
 * Given a binary string s, return the maximum distance between two occurrences of the 1s in s
 * If no two occurrences exist, return -1.
 * 
 * A single string s containing only '0' and '1'.
 *
Input: "10001"
Output: 4
The maximum distance between two 1s in "10001" is 4.

Example 2: "101"
Identify the Positions of 1s:

The maximum distance between two 1s is 2, which occurs at indices 0 and 2.
 */

const maximumDistanceBetweenTwo1s = (binaryString: string): number => {
    if (binaryString.length < 2) {
        return -1;
    }

    let indexOfFirstOne = -1;
    let indexOfLastOne = -1;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === "1") {
            if (indexOfFirstOne === -1) {
                indexOfFirstOne = i;
            }

            indexOfLastOne = i;
        }
    }

    if (indexOfFirstOne === -1 || indexOfLastOne === -1) {
        return -1;
    }

    return indexOfLastOne - indexOfFirstOne;
};

console.log(maximumDistanceBetweenTwo1s("10001")); // 4
console.log(maximumDistanceBetweenTwo1s("101")); // 2
console.log(maximumDistanceBetweenTwo1s("000")); // -1
console.log(maximumDistanceBetweenTwo1s("")); // -1
console.log(maximumDistanceBetweenTwo1s("1111")); // 3
