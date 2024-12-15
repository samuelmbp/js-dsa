/**
 * Objective:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * Input:
 * An array of integers nums and an integer target.
 *
 * Output:
 * An array of two integers that add up to the target.
 *
 * Examples:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 *
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 *
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 */

const twoSum = (numbers: number[], target: number): number[] => {
    // Solution 1 O(n^2)
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return new Array(i, j);
            }
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
