process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let str = "";
  for (let i = 0; i < b; i += 1) {
    str = "";
    for (let j = 0; j < a; j += 1) {
      str += "*";
    }
    console.log(str);
  }
});
