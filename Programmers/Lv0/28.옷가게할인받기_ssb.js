// 첫번째 시도..
const solution = (price) => {
  let sale = 0;
  if (price >= 100000 && price < 300000) {
    sale = 0.05;
  } else if (price >= 300000 && price < 500000) {
    sale = 0.1;
  } else if (price >= 500000) {
    sale = 0.2;
  }

  return price - price * sale;
};

// 두번쨰 시도..
const solution2 = (price) => {
  let sale = price;
  if (price >= 500000) {
    sale *= 0.2;
  } else if (price >= 300000) {
    sale *= 0.1;
  } else if (price >= 100000) {
    sale *= 0.05;
  }
  return Math.floor(price - sale);
};

solution(580000);
solution2(580000);
