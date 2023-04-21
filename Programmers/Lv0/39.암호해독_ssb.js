const solution = (cipher, code) => {
  const arr = [];
  for (let i = 0; i < cipher.length; i++) {
    arr.push(cipher.slice(i, i + code));
  }
  return arr;
};

// 실패
console.log(solution("dfjardstddetckdaccccdegk", "4"));
