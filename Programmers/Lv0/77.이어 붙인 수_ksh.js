function solution(num_list) {
  let odd = "";
  let even = "";
  num_list.map((el) => (Number(el) % 2 === 1 ? (odd += el) : (even += el)));
  return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
