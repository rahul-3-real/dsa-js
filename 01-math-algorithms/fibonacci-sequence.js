const fibonacci = (num) => {
  // Initialize an array with the first two Fibonacci numbers.
  const fib = [0, 1];

  // Start the loop at index 2 and run until 'num'.
  for (let i = 2; i <= num; i++) {
    // Calculate the next Fibonacci number and store it at index 'i'.
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // Return the entire array of Fibonacci numbers.
  return fib;
};

console.log(fibonacci(5));

/**
 * Big O could be O(n + 2), but as the num increases the +2 becomes insignificant.
 * For this function the Big O is O(n).
 **/
