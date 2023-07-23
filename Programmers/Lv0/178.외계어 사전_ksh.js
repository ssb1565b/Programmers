function solution(spell, dic) {
  spell = spell.sort().join("");
  return dic
    .map((a) => a.split("").sort().join(""))
    .find((a) => a === spell) !== undefined
    ? 1
    : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
