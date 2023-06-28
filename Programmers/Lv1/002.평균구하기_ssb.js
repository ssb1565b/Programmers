const solution = (arr) => {
  let sum = 0;
  arr.reduce((acc, cur) => {
    return (sum = acc += cur);
  });
  return sum / arr.length;
};
console.log(solution([1, 2, 3, 4]));
