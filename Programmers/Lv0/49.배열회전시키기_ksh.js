function solution(numbers, direction) {
  const arr = [];
  if (direction === "right") {
    for (let i = 0; i < numbers.length - 1; i++) {
      arr[0] = numbers[numbers.length - 1];
      arr.push(numbers[i]);
    }
    return arr;
  }

  if (direction === "left") {
    for (let i = 0; i < numbers.length - 1; i++) {
      arr.push(numbers[i + 1]);
    }
    arr.push(numbers[0]);
    return arr;
  }
}

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
