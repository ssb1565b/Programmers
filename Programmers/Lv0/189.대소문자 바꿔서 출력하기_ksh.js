const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  const capIdx = [];
  [...str].map((c, i) => (c.match(/[A-Z]/) ? capIdx.push(i) : 0));
  const answer = [...str]
    .map((c, i) => (capIdx.includes(i) ? c.toLowerCase() : c.toUpperCase()))
    .join("");
  console.log(answer);
});
