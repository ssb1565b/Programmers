function solution(keyinput, board) {
  const result = [0, 0];
  for (let i of keyinput) {
    if (i === "left" && result[0] > -((board[0] - 1) / 2)) {
      result[0] -= 1;
    } else if (i === "right" && result[0] < (board[0] - 1) / 2) {
      result[0] += 1;
    } else if (i === "up" && result[1] < (board[1] - 1) / 2) {
      result[1] += 1;
    } else if (i === "down" && result[1] > -((board[1] - 1) / 2)) {
      result[1] -= 1;
    }
  }
  return result;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
