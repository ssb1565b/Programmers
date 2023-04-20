const solution = (n) => {
  let result = new Array();
  let set = true;
  for (let i = 2; i < n; i++) {
    if (i / 2 < 2) {
      if (n % i === 0) {
        result.push(i);
      }
      if (n % i !== 0) {
        result.push(n);
        set = false;
      }
    }
  }

  const arr = result.filter((el) => {
    el / 2;
  });
  console.log("arr", arr);

  return set ? [...new Set(result)] : [...new Set(arr)].sort((a, b) => a - b);
};
console.log(solution(12));
console.log(solution(17));

//  실패..
