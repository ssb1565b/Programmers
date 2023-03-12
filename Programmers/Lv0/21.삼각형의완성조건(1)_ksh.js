function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));
