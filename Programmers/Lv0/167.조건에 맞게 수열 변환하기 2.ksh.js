function solution(arr) {
<<<<<<< HEAD
  let arr2 = [arr];
=======
  arr2 = [arr];
>>>>>>> e873dceabb2455a0747378c60ce5c2ebbec8954f
  let cnt = 0;
  while (true) {
    cnt += 1;
    arr2.push(
      arr2[arr2.length - 1].map((el) =>
        el >= 50 ? (el % 2 === 0 ? el / 2 : el) : el % 2 ? el * 2 + 1 : el
      )
    );
    if (arr2[cnt].join("") === arr2[cnt - 1].join("")) {
      return cnt - 1;
    }
  }
}

console.log(solution([1, 2, 3, 100, 99, 98]));
