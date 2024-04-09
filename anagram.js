// 5)Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, typically using all the original letters exactly once. 
// In simpler terms, two words are anagrams if they contain the same letters but in a different order. 
// For example, "listen" and "silent" are anagrams of each other because they contain the same letters.

function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const firstStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const secondStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // If lengths are different, they can't be anagrams
    if (firstStr1.length !== secondStr2.length) {
        return false;
    }
    
    // Count frequency of characters in one string
    const frequencyCounter = {};
    
    for (let char of firstStr1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    
    // Decrement the count while iterating through the other string
    for (let char of secondStr2) {
        if (!frequencyCounter[char]) {
            return false; // Character not found or frequency becomes negative
        } else {
            frequencyCounter[char] -= 1;
        }
    }
    
    return true;
}

// Example usage:
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true
