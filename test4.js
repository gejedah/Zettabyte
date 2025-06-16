/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  numbers.sort((a, b) => a - b);
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index + 1] !== numbers[index] + 1) {
      return numbers[index] + 1;
    }
  }
  return numbers.length;
}

console.log(result(numbers));
