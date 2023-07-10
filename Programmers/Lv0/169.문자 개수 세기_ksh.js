function solution(my_string) {
  let arr = [];
  for (let i = 65; i <= 90; i += 1) {
    arr.push({ key: String.fromCharCode(i), value: 0 });
  }
  for (let i = 97; i <= 122; i += 1) {
    arr.push({ key: String.fromCharCode(i), value: 0 });
  }
  arr.forEach((el) => {
    [...my_string].map((char) => {
      el.key === char ? (el.value += 1) : el.value;
    });
  });
  return arr.map((el) => el.value);
}

console.log(solution("Programmers"));
