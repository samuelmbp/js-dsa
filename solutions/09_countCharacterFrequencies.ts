/**
 * Objective:
 * Given a string s, return the frequency of each character in the string.
 *
 * Input:
 * A single string s containing alphanumeric characters, spaces, and punctuation.
 *
 * Output:
 * An object where each key is a character and its value is the frequency of that character in the string.

 * Examples:
 * Input: "Hello, world!"
 * Output: {H: 1, e: 1, l: 2, o: 1, w: 1, r: 1, d: 1}
 */

import { log } from "node:console";

const countCharacterFrequencies = (sentence: string): Map<string, number> => {
    if (sentence.length === 0) return new Map<string, number>();

    const frequencies = new Map<string, number>();
    const cleanSentence = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (const char of cleanSentence) {
        frequencies.has(char)
            ? frequencies.set(char, frequencies.get(char)! + 1)
            : frequencies.set(char, 1);
    }

    return frequencies;
};

console.log(countCharacterFrequencies("Hello,! world!!")); // {H: 1, e: 1, l: 2, o: 1, w: 1, r: 1, d: 1}
console.log(countCharacterFrequencies("")); // {}
log(countCharacterFrequencies("car! .. @")); // {c: 1, a: 1, r: 1}
