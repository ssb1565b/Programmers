const solution = (arr, k) =>
  k % 2 === 0 ? arr.map((el) => el + k) : arr.map((el) => el * k);

// 방법 2 : 더 단축할 수 있는 코드
const solution2 = (arr, k) => arr.map((el) => (k % 2 ? el * k : el + k));
