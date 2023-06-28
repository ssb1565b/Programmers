// 해시

const solution = (clothes) => {
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1]; // 의상종류 선택
    obj[type] = (obj[type] || 0) + 1;
  }
  //{ headgear: 2, eyewear: 1 }

  Object.values(obj).forEach((count) => {
    // count : 현재 순회 중인 의상 종류의 개수 > 2,1 반환함
    answer *= count + 1; // 입지 않는 경우의 수 1 더함
    // (2+1)*(1+1)=6
  });

  return answer - 1; // 입지 않는 경우의 수 1 빼기
};

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
