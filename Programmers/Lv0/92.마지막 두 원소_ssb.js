// 방법 1
const solution = (num_list) => {
  const list = num_list.reverse();
  const result = list[0] > list[1] ? list[0] - list[1] : list[0] * 2;
  return num_list.reverse().concat(result);
};

// 방법 2
const solution2 = (num_list) => {
  const [a, b] = [...num_list].reverse();
  // 굳이 전개연산자 [...num_list]를 쓰는 이유는 복사하기 위해서 그래야 원본 num_list가 reverse되지 않음
  return [a, b];
  // [...num_list, a > b ? a - b : a * 2];
};

console.log(solution2([2, 1, 6]));
console.log(solution2([5, 2, 1, 7, 5]));
