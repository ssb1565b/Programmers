const solution = (k, score) => {
  const newArr = [];

  return score.reduce((acc, cur) => {
    newArr.push(cur);
    honors = newArr.sort((a, b) => b - a).slice(0, k); // k만큼 내림차순된 배열
    return [...acc, Math.min(...honors)];
  }, []);
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
