function solution(strArr) {
  const obj = {};
  strArr.forEach((el) => {
    const len = el.length;
    obj[len] = obj[len] || [];
    obj[len].push(el);
  });
  const arr = Object.values(obj).map((el) => el.length);
  return Math.max(...arr);
}
