const solution = (strArr) => {
  return strArr.map((el, idx) =>
    idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
  );
};

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
