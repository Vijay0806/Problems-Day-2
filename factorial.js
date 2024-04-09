// 2)Write a function that takes a number as input and returns the factorial of that number.


function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    } else {
      // Calculate factorial recursively
      return n * factorial(n - 1);
    }
  }
  
  // Test the function
  const number = 5;
  console.log("Factorial of", number, "is", factorial(number)); // Output: Factorial of 5 is 120
  