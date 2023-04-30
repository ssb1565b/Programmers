const solution = (cipher, code) => {
  return [...cipher].filter((el, idx) => (idx + 1) % code === 0);
};

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));
console.log(solution("hiii", 1));
