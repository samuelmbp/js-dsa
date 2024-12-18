/**
 * Objective:
 * Given a binary string s (e.g.: "101101"), count the number of 1s in the string.
 *
 * Input:
 * A binary string s.
 *
 * Output:
 * An integer representing the number of 1s in the string.
 *
 * Examples:
 * Input: "101101"
 * Output: 4
 *
 * Input: "000000"
 * Output: 0
 *
 * Input: "111111"
 * Output: 6
 *
 * Input: "012301"
 * Output: 2
 */

const countTheNumber = (binaryString: string): number => {
    // Solution 1
    // let count = 0;
    // for (let i = 0; i < binaryString.length; i++) {
    //     if (binaryString[i] === "1") {
    //         count++;
    //     }
    // }

    // return count;

    // Solution 2
    return binaryString.split("").filter((char) => char === "1").length;
};

console.log(countTheNumber("101101")); // 4
console.log(countTheNumber("000000")); // 0
console.log(countTheNumber("111111")); // 6
console.log(countTheNumber("012301")); // 2
