const solution = (arr) => {
  return arr.map((el) =>
    Math.floor(
      el >= 50 && el % 2 === 0 ? el / 2 : el < 50 && el % 2 === 1 ? el * 2 : el
    )
  );
};
