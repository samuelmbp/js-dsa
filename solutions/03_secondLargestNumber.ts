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

    const uniqueNumbers = Array.from(new Set(numbers));

    if (uniqueNumbers.length < 2) {
        throw new Error(
            "No second largest number exists (e.g., all elements are identical)."
        );
    }

    // First Solution: O (n log n)
    /**
    const sortedArray = uniqueNumbers.sort((a, b) => a - b);
    return sortedArray[sortedArray.length - 2];
    */

    // Second Solution: O(n)
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;

    for (let num of uniqueNumbers) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    return secondLargest;
};

console.log(secondLargestNumber([3, 2, 1, 5, 6])); // 5
console.log(secondLargestNumber([1, 2])); // 1
// console.log(secondLargestNumber([2])); // Error
// console.log(secondLargestNumber([5, 5, 5])); // Error
