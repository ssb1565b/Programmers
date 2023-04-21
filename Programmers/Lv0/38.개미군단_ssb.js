const solution = (hp) => {
  const g = 5;
  const s = 3;
  const w = 1;
  let result = 0;
  if (hp % g === 0) {
    return (result = hp / g);
  } else if ((hp % g) % s === 0) {
    return (result = Math.floor(hp / g) + (hp % g) / s);
  } else {
    return (result =
      Math.floor(hp / g) + Math.floor((hp % g) / s) + Math.floor((hp % g) % s));
  }
};

console.log(solution(999));
