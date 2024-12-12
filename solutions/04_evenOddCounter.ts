/**
 * Objective:
Given an array of integers, you need to count how many of the elements are even and how many are odd. An even number is any integer that is divisible by 2, while an odd number is not.

Input
An array of integers, e.g., [1, 2, 3, 4, 5, 6].

Output
Two integers: the count of even numbers and the count of odd numbers.

Example
For the input array [1, 2, 3, 4, 5, 6]:
Even count: 3 (the even numbers are 2, 4, and 6)
Odd count: 3 (the odd numbers are 1, 3, and 5) 
 */

const evenOddCounter = (numbers: number[]): string => {
    if (numbers.length < 1) {
        return `Evens: 0 -> Odds: 0`;
    }

    let evens = 0;
    let odds = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }

    return `Evens: ${evens} -> Odds: ${odds}`;
};

console.log(evenOddCounter([1, 2, 3, 4, 5]));
