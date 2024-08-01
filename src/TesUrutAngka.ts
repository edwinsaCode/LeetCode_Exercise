let Num1: number[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let Num2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function gabung(Num1: number[], Num2: number[]) {
  let tampung1;
  let tampung2;
  if (Num1.length > Num2.length) {
    tampung1 = Num1;
    tampung2 = Num2;
  } else {
    tampung1 = Num2;
    tampung2 = Num1;
  }
  let totall: number[] = [];
  for (let i in tampung1) {
    if (tampung2.includes(tampung1[i])) {
      totall.push(tampung1[i]);
    }
  }
  return totall.sort((a, b) => a - b);
}

console.log(
  gabung(
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  )
);
