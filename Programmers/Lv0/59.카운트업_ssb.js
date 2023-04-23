const solution = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
};

console.log(solution(3, 10));
