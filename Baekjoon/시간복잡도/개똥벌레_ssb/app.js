const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [width, Height] = input[0].split(" ").map(Number);

const bottom = Array.from({ length: Height + 1 }, () => 0); // 종유석
const top = Array.from({ length: Height + 1 }, () => 0); // 석순

input.forEach((v, idx) => {
  idx % 2 === 0 ? bottom[parseInt(v)]++ : top[Height - parseInt(v) + 1]++;
});
console.log("??", input, bottom, top);
