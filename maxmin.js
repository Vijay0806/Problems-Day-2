// 4.	Write a function that finds the maximum and minimum elements in an array.

function findMaxAndMin(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return { max, min };
}

// Example usage:
const array = [3, 1, 8, 5, 10, 2];
console.log(findMaxAndMin(array)); // Output: { max: 10, min: 1 }
