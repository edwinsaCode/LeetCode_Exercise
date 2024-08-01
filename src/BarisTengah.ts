const Question = [9, 11, 45, 23, 69, 71, 13, 101, 165, 133];

function Pola(n: number) {
  let center = Math.ceil((n * n) / 2);
  let right = center + 1;
  let left = center - 1;
  let top = center - n;
  let topRight = right - n;
  let topLeft = left - n;
  let bottom = center + n;
  let bottomRight = right + n;
  let bottomLeft = left + n;
  let result = [
    right + left + top + topLeft + topRight + bottom + bottomLeft + bottomRight,
    center,
  ];

  return result;
}
for (let i = 0; i < Question.length; i++) {
  console.log(Pola(Question[i]));
}
