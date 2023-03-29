// 첫번째 시도
const solution = (money) => {
  const maxOrder = Math.floor(money / 5500);
  const leftMoney = money - 5500 * maxOrder;
  return [maxOrder, leftMoney];
};

// 두번쨰 시도
const solution2 = (money) => [Math.floor(money / 5500), money % 5500];

solution2(15000);
console.log(solution2(15000));
