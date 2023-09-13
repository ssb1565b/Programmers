// input
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const calculatedValue = input[1].split(" ").map(Number);
const additionalSection = input
  .slice(2)
  .map((line) => line.split(" ").map(Number));

const prefixSums = [0];
let currentSum = 0;
for (let i = 0; i < N; i++) {
  currentSum += calculatedValue[i];
  console.log("currentSum", currentSum);
  prefixSums.push(currentSum);
}

// 여기서 prefixSums을 콘솔찍으면 [ 0, 5, 9, 12, 14, 15 ]인데 이것은
// [5 4 3 2 1] 배열에서 5, 5+4, 5+4+3,5+4+3+2, 5+4+3+2+1의 값임 즉 0부터 각  구간까지의 누적합인것
// 그러나 문제가 구간의 합을 구하다보니 시작이 앞을 건너뛰고 2,4나 5,5인 경우는 앞의 누적값을 뺴야함
// 즉 2,4면 [5,4,3,2,1]에서 4+3+2 즉 9가 되어야하니까
// [ 0, 5, 9, 12, 14, 15 ]에서 prefixSums[endIdx] - prefixSums[startIdx - 1] 이코드를 통해 14 - 5 = 9 가 되는것임
const output = [];
for (let s = 0; s < M; s++) {
  let [startIdx, endIdx] = additionalSection[s];
  const sum = prefixSums[endIdx] - prefixSums[startIdx - 1];
  output.push(sum);
}

// 이 방식을 하는 이유는 미리 누적합을 구해놓다보니 계속 [5,4,3,2,1]을 가지고 반복적으로 누적합을 계산하는 방식이 필요없어짐
console.log(output.join("\n"));
