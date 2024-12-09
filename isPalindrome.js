/**
 Objective:
 Determine whether a given string is a palindrome.
 A palindrome is a string that reads the same forward and backward, ignoring spaces, punctuation, and case differences.

 Input:
 A single string s containing alphanumeric characters, spaces, and punctuation.

 Output:
 A boolean value (true or false):
 true if the string is a palindrome.
 false if the string is not a palindrome.

 Examples:
 Input: "A man, a plan, a canal, Panama"
 Output: true

 Input: "racecar"
 Output: true

 Input: "hello"
 Output: false
 */

const isPalindrome = (sentence) => {
    const cleanString = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedString = cleanString.split("").reverse().join("");

    return reversedString === cleanString;
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
