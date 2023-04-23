const solution = (n, k) => {
  const arr = [];
  for (let i = 1; k * i <= n; i++) {
    arr.push(k * i);
  }
  return arr;
};
