// 방법 1
const solution = (num_list, n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(num_list[i]);
  }
  return arr;
};

// 방법 2
const solution2 = (num_list, n) => {
  return num_list.slice(0, n);
};

console.log(solution([2, 1, 6], 1));
console.log(solution2([2, 1, 6], 1));
