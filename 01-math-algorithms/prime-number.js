const isPrime = (num) => {
  // Check if the number is less than 2 (since prime numbers are >= 2).
  // If num is less than 2, return false because numbers less than 2 are not prime.
  if (num < 2) return false;

  // Loop through numbers from 2 to one less than 'num'.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Check if 'num' is divisible by any number 'i' in the range.
    // If 'num' is divisible by 'i', it's not a prime, so return false.
    if (num % i === 0) return false;
  }

  // If no divisors were found in the loop, the number is prime, so return true.
  return true;
};

console.log(isPrime(4));

/**
 * For this function the Big O is O(sqrt(n)).
 **/
