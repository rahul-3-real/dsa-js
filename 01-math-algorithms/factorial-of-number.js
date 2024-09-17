const factorial = (num) => {
  // Initialize the result variable to 1, as multiplying by 1 has no effect.
  let result = 1;

  // Start the loop at 2 and run until 'num' (inclusive).
  // We start from 2 because multiplying by 1 doesn't change the result.
  for (let i = 2; i <= num; i++) {
    // Multiply the current result by 'i' and store it back in 'result'.
    result = result * i;
  }

  // Return the final calculated factorial value.
  return result;
};

console.log(factorial(5));

/**
 * Big O could be O(n + 2), but as the num increases the +2 becomes insignificant.
 * For this function the Big O is O(n).
 **/
