function solution(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      //  return  arr[i]?.[j] == arr[j]?.[i] ? 1 : 0;
      // 틀림 : 첫 번째 원소만 비교한 후 결과를 반환하고 함수를 종료합니다. 이로 인해 함수는 항상 첫 번째 원소의 비교 결과에 따라 1 또는 0을 반환하고 종료됩니다. 따라서 내부 반복문이 한 번만 실행되고 함수가 종료되기 때문에 모든 원소를 비교하지 않습니다.
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}

console.log(
  solution([
    [5, 192, 33],
    [192, 72, 95],
    [33, 95, 999],
  ])
);
console.log(
  solution([
    [19, 498, 258, 587],
    [63, 93, 7, 754],
    [258, 7, 1000, 723],
    [587, 754, 723, 81],
  ])
);
