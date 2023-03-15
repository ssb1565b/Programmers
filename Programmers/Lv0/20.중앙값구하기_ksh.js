function solution(array) {
  array.sort((a, b) => a - b); // 배열 오름차순 정렬
  return array[Math.floor(array.length / 2)]; // index 가운데를 찾기 위해 배열 length르 2로 나누고 소숫점 버림
}

console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
