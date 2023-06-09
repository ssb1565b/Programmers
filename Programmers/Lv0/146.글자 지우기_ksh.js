function solution(my_string, indices) {
  return [...my_string]
    .map((el, i) => (indices.includes(i) ? 0 : el))
    .filter((el) => el !== 0)
    .join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
