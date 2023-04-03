const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input[0]; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
});
