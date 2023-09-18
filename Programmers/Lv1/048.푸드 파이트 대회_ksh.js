function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }
  return answer + "0" + [...answer].reverse().join("");
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
