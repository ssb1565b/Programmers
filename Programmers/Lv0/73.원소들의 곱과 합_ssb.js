// 방법 1
const solution = (num_list) => {
  return num_list.reduce((acc, sum) => acc * sum) >
    num_list.reduce((acc, sum) => acc + sum) ** 2
    ? 0
    : 1;
};

// 방법 2
const solution2 = (num_list) => {
  return num_list.reduce((acc, sum) => acc * sum) >
    Math.pow(num_list.reduce((acc, sum) => acc + sum))
    ? 0
    : 1;
};

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution2([5, 7, 8, 3]));
