function solution(arr) {
  return arr.map((el) => (el >= 50 && el % 2 === 0 ? el / 2 : el < 50 && el % 2 === 1 ? el * 2 : el));
}

console.log(solution([1, 2, 3, 100, 99, 98]));
