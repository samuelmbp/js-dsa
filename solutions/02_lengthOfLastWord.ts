/**
 * Objective:
 * Given a string s consisting of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
 *
 * Input:
 * A single string s containing alphanumeric characters, spaces, and punctuation.
 *
 * Output:
 * An integer representing the length of the last word in the string.
 *
 * Examples:
 * Input: "Hello, world!"
 * Output: 5
 *
 * Input: "   fly me   to   the moon  "
 * Output: 4
 */

const lengthOfLastWord = (sentence: string): number => {
    if (sentence.length === 0) return 0;

    const words = sentence.split(" ").reverse();
    const noWhiteSpaces = words.filter((word) => word !== "");
    let lengthLastWord = noWhiteSpaces[0].replace(/[^a-zA-Z0-9]/g, "").length;

    return lengthLastWord;
};

console.log(lengthOfLastWord("Hello, world!")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
