/**
 * Objective:
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 *
 * Input:
 * A string s.
 *
 * Output:
 * The reversed string.
 *
 * Examples:
 * Input: "Code is fun"
 * Output: "nuf si edoc"
 *
 * Input: "Hello world!"
 * Output: "!dlrow ,olleH"
 */

export const reverseString = (sentence: string): string => {
    if (sentence.length === 0) return "";
    /**
     * Steps to solve:
     * 1. Split the sentence into an array of words.
     * 2. Iterate over the array of words and reverse each word.
     * 3. Join the reversed words back into a single string.
     * 4. Return the reversed sentence.
     */
    // SOLUTION 1
    const reversedWords = [];
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        reversedWords.push(words[i].split("").reverse().join(""));
    }

    return reversedWords.join(" ");
};

console.log(reverseString("Code is fun"));
console.log(reverseString("Hello, world!"));
