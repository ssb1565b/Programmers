const solution = (my_string) => {
  const arr = my_string.replace(/[^0-9]/g, "");
  return [...arr].reduce((acc, el) => {
    return acc + Number(el);
  }, 0);
};
console.log(solution("aAb1B2cC34oOp"));
