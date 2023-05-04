function solution(array) {
  const maxNum = Math.max(...array);
  return [maxNum, array.indexOf(maxNum)];
}
console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
