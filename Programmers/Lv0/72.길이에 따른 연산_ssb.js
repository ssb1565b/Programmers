const solution = (num_list) => {
  return num_list.length >= 11
    ? num_list.reduce((acc, sum) => {
        return acc + sum;
      }, 0)
    : num_list.reduce((acc, sum) => {
        return acc * sum;
      }, 1);
};

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
