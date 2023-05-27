function solution(array, n) {
  let closestNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentNumber = array[i];
    const difference = Math.abs(currentNumber - n);
    const closestDifference = Math.abs(closestNumber - n);

    if (difference < closestDifference) {
      closestNumber = currentNumber;
    } else if (difference === closestDifference && currentNumber < closestNumber) {
      closestNumber = currentNumber;
    }
  }

  return closestNumber;
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
