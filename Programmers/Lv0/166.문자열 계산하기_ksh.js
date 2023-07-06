function solution(my_string) {
  const arr = my_string.split(" ");
  let sum = Number(arr[0]);
  for (let i = 1; i < my_string.length - 1; i += 1) {
    if (arr[i] === "+") {
      sum += Number(arr[i + 1]);
    } else if (arr[i] === "-") {
      sum -= Number(arr[i + 1]);
    }
  }
  return sum;
}

console.log(solution("3 + 4 - 1"));
