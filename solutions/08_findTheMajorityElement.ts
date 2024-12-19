/**
 * Objective:
 * Given an array numbers of size n, return the majority element.
 * The majority element is the element that appears more than n/2 times in the array.
 *
 *
 * Input:
 * An array of integers numbers.
 *
 * Output:
 * The majority element of the array.
 *
 * Examples:
 * Input: [3, 3, 3]
 * Output: 3
 *
 * Input: [2, 2, 1, 1, 1, 2, 2]
 * Output: 2
 *
 * Input: [0, 1, -2, 1, 0, 1, -2, -2, -2]
 * Output: Error("No majority element exists in the array."")
 */

const findTheMajorityElement = (numbers: number[]): number => {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }

    const frequencyMap = new Map<number, number>();

    for (const number of numbers) {
        frequencyMap.set(number, (frequencyMap.get(number) ?? 0) + 1);

        if (frequencyMap.get(number)! > numbers.length / 2) {
            return number;
        }
    }

    throw new Error("No majority element exists in the array.");
};

console.log(findTheMajorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(findTheMajorityElement([7])); // 7
console.log(findTheMajorityElement([3, 3, 3]));
console.log(findTheMajorityElement([0, 1, -2, 1, 0, 1, -2, -2, -2, -2])); // Error
