function solution(arr) {
  let cnt = 0;
  while (cnt > 10) {
    arr.forEach((el) => {
      cnt += 1;
      el <= 50 ? (el % 2 ? el * 2 + 1 : el * 2) : el;
      if (tempArr[cnt].join("") === tempArr.join("")) {
        return cnt - 1;
      }
    });
  }
}

console.log(solution([1, 2, 3, 100, 99, 98]));
