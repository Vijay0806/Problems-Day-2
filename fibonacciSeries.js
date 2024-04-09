// 1)1.	Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.


function fibonacci(n) {
    // Initialize array to store Fibonacci sequence
    let fibSeq = [];
  
    // Base case: first two Fibonacci numbers
    fibSeq.push(0);
    fibSeq.push(1);
  
    // Generate subsequent Fibonacci numbers
    for (let i = 2; i < n; i++) {
      fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
  
    return fibSeq;
  }
  
  // Test the function
  const n = 15; // Generate first 10 Fibonacci numbers
  console.log(fibonacci(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  