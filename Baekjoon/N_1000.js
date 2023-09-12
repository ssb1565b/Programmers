let input = require("fs").readFileSync("./dev/stdin").toString().split(" "); // 1,2
// .split(' ') 띄어쓰기
// .split('\n') 줄바꿈

// 만약에 stdin 형태가 1 2 하고 줄바꾸고 3이 있으면

let a = parseInt(input[0]);

console.log(a);
