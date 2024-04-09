// 3)Write a function that checks if a given string is a palindrome.


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the clean string is equal to its reverse
    let reversedStr = '';
    for (let i = cleanStr.length - 1; i >= 0; i--) {
        reversedStr += cleanStr[i];
    }
    
    return cleanStr === reversedStr;
}

// Example usage:
const testString = "race car";
console.log(isPalindrome(testString)); // Output: true

