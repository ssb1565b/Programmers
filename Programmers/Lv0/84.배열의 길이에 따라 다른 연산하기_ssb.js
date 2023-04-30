const solution = (arr, n) => {
  let result = [...arr];
  if (arr.length % 2 === 1) {
    for (let i = 0; i < arr.length; i += 2) result[i] += n;
    return result;
  } else {
    for (let i = 1; i < arr.length; i += 2) result[i] += n;
    return result;
  }
};

console.log(solution([49, 12, 100, 276, 33], 27));
