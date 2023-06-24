function solution(price, money, count) {
  let needMoney = 0;
  for (let i = 0; i < count; i++) {
    needMoney += price * (i + 1);
  }
  return needMoney < money ? 0 : needMoney - money;
}

console.log(solution(3, 20, 4));
