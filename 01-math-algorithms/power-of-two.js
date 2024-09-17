// const isPowerOfTwo = (num) => {
//   // If the number is less than 1, it cannot be a power of two, so return false.
//   if (num < 1) return false;

//   // Keep dividing the number by 2 as long as it's greater than 1.
//   while (num > 1) {
//     // If at any point the number is not divisible by 2, return false.
//     // This means the number is not a power of two.
//     if (num % 2 !== 0) return false;

//     // Divide the number by 2 (this reduces the number for the next loop iteration).
//     num /= 2;
//   }

//   // If the loop completes and no non-divisible-by-2 condition was met,
//   // then the number is a power of two, so return true.
//   return true;
// };

// console.log(isPowerOfTwo(3));

/**
 * For this function the Big O is O(logn).
 **/

const isPowerOfTwoBitWise = (num) => {
  // If the number is less than 1, it cannot be a power of two, so return false.
  if (num < 1) return false;

  // Check if the number is a power of two using a bitwise operation.
  // A number is a power of two if it has exactly one bit set in its binary representation.
  // This operation works because powers of two in binary form have exactly one bit set to 1.
  // For example, 4 is 100 in binary, and 3 is 011 in binary.
  // num - 1 flips all the bits after the rightmost 1 bit, including the rightmost 1 bit itself.
  // For example, if num is 4 (binary 100), num - 1 is 3 (binary 011).
  // Performing a bitwise AND between num and num - 1 results in 0 if num is a power of two.
  return (num & (num - 1)) === 0;
};

console.log(isPowerOfTwoBitWise(4));

/**
 * For this function the Big O is O(1).
 **/
