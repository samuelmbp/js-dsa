/**
 * Objective:
 * Given an array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 *
 *
 * Examples:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2]
 *
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4]
 *
 * Input: nums = []
 * Output: 0, nums = []
 */

const removeDuplicates = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0;
    }

    let uniqueIndex = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[uniqueIndex] !== numbers[i]) {
            uniqueIndex++;
            numbers[uniqueIndex] = numbers[i];
        }
    }

    return uniqueIndex + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([])); // 0
console.log(removeDuplicates([-1, 2, 3, -2, -4, -4])); // 5
