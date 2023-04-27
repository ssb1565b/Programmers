// 방법1
function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }
  return -1;
}

// 방법2
const solution = (num_list) => num_list.findIndex((el) => el < 0);

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
console.log(solution([13, 22, 53, 24, 15, 6]));
