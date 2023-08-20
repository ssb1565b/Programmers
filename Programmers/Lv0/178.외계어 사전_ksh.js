function solution(spell, dic) {
  const sortedSpell = spell.sort().join("");
  const sortedDic = dic.map((el) => [...el].sort().join(""));
  return sortedDic.includes(sortedSpell) ? 1 : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
