// 1. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join(""); // Convert string to array, reverse it, and join back
}
console.log(reverseString("hello")); // Output: "olleh"

// 2. Find the second-largest number in an array
function secondLargest(arr) {
    if (arr.length < 2) return null; // If array has less than 2 elements, return null
    let sortedArr = [...new Set(arr)].sort((a, b) => b - a); // Remove duplicates and sort in descending order
    return sortedArr.length > 1 ? sortedArr[1] : null; // Return second element if exists
}
console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45

// 3. Check if a given string is a palindrome
function isPalindrome(str) {
    let reversed = str.split("").reverse().join(""); // Reverse the string
    return str === reversed; // Compare original with reversed
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
