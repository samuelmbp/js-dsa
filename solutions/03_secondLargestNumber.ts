/**
 * Objective:
 * Given an array of numbers nums, return the second largest number in the array.
 *
 * Input:
 * An array of numbers nums.
 *
 * Output:
 * The second largest number in the array.
 *
 * Examples:
 * Input: [3, 2, 1, 5, 6]
 * Output: 5
 *
 * Input: [1, 2]
 * Output: 1
 */

const secondLargestNumber = (numbers: number[]): number => {
    if (numbers.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    const sortedArray = numbers.sort((a, b) => a - b);

    return sortedArray[sortedArray.length - 2];
};

console.log(secondLargestNumber([3, 2, 1, 5, 6]));
console.log(secondLargestNumber([1, 2]));
