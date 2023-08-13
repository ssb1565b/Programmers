function solution(t, p) {
  const cutList = [...t].map((cur, idx) => {
    const num = t.substr(idx, p.length);
    if (num.length === p.length && Number(num) <= Number(p)) {
      return num;
    }
  });

  return cutList.filter((item) => !!item).length;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
