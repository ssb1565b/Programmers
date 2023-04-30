const solution = (num_list) => {
  return (
    Number(
      num_list
        .filter((el) => el % 2 === 1)
        .join(",")
        .toString()
        .replaceAll(",", "")
    ) +
    Number(
      num_list
        .filter((el) => el % 2 === 0)
        .join(",")
        .toString()
        .replaceAll(",", "")
    )
  );
};
console.log(solution([3, 4, 5, 2, 1]));
