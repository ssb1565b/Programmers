function solution(order) {
  let totalCost = 0;
  order.map((el) =>
    el.includes("latte") ? (totalCost += 5000) : (totalCost += 4500)
  );
  return totalCost;
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
console.log(solution(["americanoice", "americano", "iceamericano"]));
